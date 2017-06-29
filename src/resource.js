/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 16:48:24
 */

import { dictToString } from './utils';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import { REQUEST_FAILED } from './consts/action';
import { BASE_URL } from './consts/metadata';

const METHOD = {
    GET: Symbol('GET'),
    POST: Symbol('POST'),
    DELETE: Symbol('DELETE')
};


//低版本的浏览器不支持promise
if (!window.Promise) {
    window.Promise = Promise;
}

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
                params.requests[0].query = params.requests[0].query === undefined ? '' : JSON.stringify(params.requests[0].query);
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
            let promise = fetch(BASE_URL + request.path + '?' + dictToString(request.query), config);
            return promise.then(res => res.json());
        }))
        .then(json => {
            params.onSuccess(json);
        })
        .catch(error => {
            console.error(error);
            params.onFail(error);
        });
}

function fetchConfig(params, config) {

    return fetch(BASE_URL + params.requests[0].path + (config.method !== 'GET' ? '' : params.requests[0].query), config)
        .then(checkStatus)
        .then(res => res.json())
        .then(json => {
            params.onSuccess(json);
        })
        .catch((error) => {
            console.error(error);
            params.onFail(error);
        });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status <= 304) {
        return response;
    } else {

        let error, deffered;
        if (response.status === 503) {
            deffered = response.json().then(json => {
                error = new Error(json.code);
                error.msg = json.msg;

                return error;
            });
        } else {

            error = new Error(response.status);
            error.msg = response.statusText;

            deffered = new Promise((resolve, reject) => {
                resolve(error);
            });

        }

        return deffered.then(function(error) {
            throw error;
        });
    }
}

/**
 * 接受数据
 * $param json 接受的数据
 */
function receiveData(requests, json) {
    return {
        type: requests.category,
        requests,
        data: json
    };
}

/**
 * 请求失败
 */
function requestFailed(requests, error) {
    return {
        type: REQUEST_FAILED,
        data: {
            code: error.message,
            msg: error.msg
        }
    };
}

/**
 * 发送请求的具体方法
 */
export function fetchData(...requests) {
    return dispatch => send({
        requests,
        onSuccess: json => dispatch(receiveData(requests[0], json)),
        onFail: error => dispatch(requestFailed(requests[0], error))
    });

};
