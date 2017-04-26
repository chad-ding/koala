/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import { dictToString, dictToJson } from './utils';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import { REQUEST_DATA, REQUEST_FAILED, RECEIVE_DATA, RESPONSE_ERROR } from './consts/action';

const METHOD = {
    GET: Symbol('GET'),
    POST: Symbol('POST'),
    DELETE: Symbol('DELETE')
};


//低版本的浏览器不支持promise
if (!window.Promise) {
    window.Promise = Promise;
}

let baseUrl = 'http://localhost:9200';
// let baseUrl = 'http://192.168.1.103:5000/api';

let config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors',
    cache: 'default',
    credentials: 'include'
};

function send(params) {
    if (params.requests.length > 1) {
        fetchAllConfig(params);
    } else {
        switch (METHOD[params.requests[0].method.toUpperCase()]) {
            case METHOD.GET:
                params.requests[0].query = params.requests[0].query === undefined ? '' : ('?' + dictToString(params.requests[0].query));
                return fetchConfig(params, Object.assign({}, {
                    method: params.requests[0].method
                }, config));
            case METHOD.POST:
                return fetchConfig(params, Object.assign({}, {
                    method: params.requests[0].method,
                    body: JSON.stringify(params.query)
                }, config));
            case METHOD.DELETE:
                params.requests[0].query = params.requests[0].query === undefined ? '' : JSON.stringify(params.requests[0].query)
                return fetchConfig(params, Object.assign({}, {
                    method: params.requests[0].method,
                    body: params.requests[0].query
                }, config));
        }
    }
}

function fetchAllConfig(params) {
    //使用Promise.all()
    Promise.all(params.requests.map(request => {
        return fetch(baseUrl + request.path + '?' + dictToString(request.query), config)
        .then(res => res.json());
    }))
    .then(json => {
        params.onSuccess(json);
    })
    .catch(error => {
        console.log(error);
        params.onFail(error);
    });
}

function fetchConfig(params, config) {

    return fetch(baseUrl + params.requests[0].path + (config.method !== 'GET' ? '' : params.requests[0].query), config)
        .then(res => res.json())
        .then(checkStatus)
        .then(json => {
            params.onSuccess(json);
        })
        .catch((error) => {
            console.error(error);
            params.onFail(error);
        });
}

function checkStatus(response) {
    if (response.code >= 200 && response.code <= 304) {
        return response;
    } else {
        var error = new Error(response.message);
        error.response = response;
        throw error;
    }
}

/**
 * 开始请求
 */
function requestData(requests) {
    return {
        type: REQUEST_DATA + requests.category,
        requests
    };
}

/**
 * 接受数据
 * $param json 接受的数据
 */
function receiveData(requests, json) {
    if (json.data === 'SESSION_TIMEOUT') {
        return {
            type: RESPONSE_ERROR,
            requests,
            data: json
        };
    }
    return {
        type: RECEIVE_DATA + requests.category,
        requests,
        data: json
    };
}

/**
 * 请求失败
 */
function requestFailed(requests) {
    return {
        type: REQUEST_FAILED + requests.category,
        requests
    };
}

/**
 * 发送请求的具体方法
 */
export function fetchData(...requests) {
    return dispatch => {
        dispatch(requestData(requests[0]));
        return send({
            requests,
            onSuccess: json => dispatch(receiveData(requests[0], json)),
            onFail: error => dispatch(requestFailed(requests[0]))
        });
    };
};
