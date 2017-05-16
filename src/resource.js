/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import { dictToString } from './utils';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import { REQUEST_DATA, REQUEST_FAILED, RECEIVE_DATA } from './consts/action';

const METHOD = {
    GET: Symbol('GET'),
    POST: Symbol('POST'),
    DELETE: Symbol('DELETE')
};


//低版本的浏览器不支持promise
if (!window.Promise) {
    window.Promise = Promise;
}

let baseUrl = 'http://localhost:9200/kaleido-webapp';
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
        let promise = fetch(baseUrl + request.path + '?' + dictToString(request.query), config);
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

    return fetch(baseUrl + params.requests[0].path + (config.method !== 'GET' ? '' : params.requests[0].query), config)
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
        if(response.status === 503){
            deffered = response.json().then( json => {
                error = new Error(json.code);
                error.msg = json.msg;

                return error;
            });
        }else{

            error = new Error(response.status);
            error.msg = response.statusText;

            deffered = new Promise((resolve, reject) => {
                resolve(error);
            });

        }
        
        return deffered.then(function(error){
            throw error;
        });
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
    return {
        type: RECEIVE_DATA + requests.category,
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
    return dispatch => {
        dispatch(requestData(requests[0]));
        return send({
            requests,
            onSuccess: json => dispatch(receiveData(requests[0], json)),
            onFail: error => dispatch(requestFailed(requests[0], error))
        });
    };
};
