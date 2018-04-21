/**
 *@Author: chad.ding
 *@Date: 2017-10-31 17:26:44
 */

import 'whatwg-fetch';
import { notification } from 'antd';
import { dictToString, isEmpty, isNull } from './utils';
import { REQUEST_FAILED, REQUEST_SUCCESS } from 'consts/action';
import { BASE_URL } from 'consts/metadata';

notification.config({
    zIndex: 7,
    top: 65
});

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
    credentials: 'include'
};

const METHOD = {
    GET: Symbol('GET'),
    POST: Symbol('POST'),
    PUT: Symbol('PUT'),
    DELETE: Symbol('DELETE')
};

function trimParam(param) {
    if (isNull(param) || typeof param === 'number') {
        return param;
    }

    if (typeof param === 'string') {
        return param.trim();
    }

    let result;
    if (param instanceof Array) {
        result = param.map(item => trimParam(item));
        return result;
    }

    let propNames = Object.getOwnPropertyNames(param);
    if (propNames.length < 1) {
        return param;
    }

    result = {};
    for (let propName of propNames) {
        let value = trimParam(param[propName]);
        result[propName] = value;
    }

    return result;
}

function send(params) {

    const method = METHOD[params.request.method.toUpperCase()];

    switch (method) {
        case METHOD.GET:
            params.request.query = isEmpty(params.request.query) ? '' : ('?' + dictToString(params.request.query));
            return fetchConfig(params, Object.assign({}, {
                method: params.request.method
            }, config));
        case METHOD.POST:
            return fetchConfig(params, Object.assign({}, {
                method: params.request.method,
                body: JSON.stringify(params.request.query)
            }, config));
        case METHOD.DELETE:
            params.request.query = isEmpty(params.request.query) ? '' : JSON.stringify(params.request.query);
            return fetchConfig(params, Object.assign({}, {
                method: params.request.method,
                body: params.request.query
            }, config));
        case METHOD.PUT:
            params.request.query = isEmpty(params.request.query) ? '' : JSON.stringify(params.request.query);
            return fetchConfig(params, Object.assign({}, {
                method: params.request.method,
                body: params.request.query
            }, config));
    }
}

function fetchConfig(params, config) {

    return fetch(BASE_URL + params.request.path + (config.method.toUpperCase() !== 'GET' ? '' : params.request.query), config)
        .then(checkStatus)
        .then(res => {
            params.onSuccess(res);
            return res.json();
        })
        .then(json => params.onReceiveData(json))
        .catch((error) => {
            notification.error({
                message: '请求错误',
                description: error.message
            });
            params.onFail(error);
        });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    return response.json().then((result) => {
        const error = new Error(result.message || result.error.message);
        error.response = response;
        throw error;
    }, (error) => {
        notification.error({
            message: response.status,
            description: response.statusText
        });
        throw error;
    });
}

/**
 * 接受数据
 * $param json 接受的数据
 */
function receiveData(request, json) {
    return {
        type: request.category,
        request,
        data: json
    };
}

/**
 * 请求成功
 */

function requestSuccess(request) {
    return {
        type: REQUEST_SUCCESS,
        category: request.category
    };
}

/**
 * 请求失败
 */
function requestFailed(request, error) {
    return {
        type: REQUEST_FAILED,
        category: request.category
    };
}

/**
 * 发送请求的具体方法
 */
export function fetchData(request) {

    let query = Object.assign({}, request.query);
    request.query = query;

    const regExp = /(\{([a-zA-Z0-9]+)\})/;
    let path = request.path;

    while (regExp.test(path)) {
        let value = request.query[RegExp.$2];

        if (isNull(value)) {
            notification.error({
                message: '请求参数错误',
                description: `请提供必须的参数【${RegExp.$2}】`
            });
            return;
        }

        path = path.replace(regExp, value);
        delete request.query[RegExp.$2];
    }

    if (!isEmpty(request.query)) {
        request.query = trimParam(request.query);
        let queryNames = Object.getOwnPropertyNames(request.query);
        if (queryNames.length === 1 && request.query[queryNames[0]] instanceof Array) {
            request.query = request.query[queryNames[0]];
        }
    }
    request.path = path;

    if (request.category) {
        return dispatch => send({
            request,
            onSuccess: response => dispatch(requestSuccess(request, response)),
            onReceiveData: json => dispatch(receiveData(request, json)),
            onFail: error => dispatch(requestFailed(request, error))
        });
    } else {
        return send({
            request,
            onSuccess: response => requestSuccess(request, response),
            onReceiveData: json => receiveData(request, json),
            onFail: error => requestFailed(request, error)
        });
    }

};