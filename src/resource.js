/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import { dictToString, dictToJson } from './utils';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

//低版本的浏览器不支持promise
if (!window.Promise) {
    window.Promise = Promise;
}

let baseUrl = 'http://localhost:9200/api';
// let baseUrl = 'http://192.168.1.103:5000/api';

let config = {
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin'
};

export default function(params) {
    if (params.requests.length > 1) {
        fetchAllConfig(params);
    } else {
        switch (params.requests[0].method) {
            case 'GET':
                params.requests[0].query = params.requests[0].query === undefined ? '' : ('?' + dictToString(params.requests[0].query));
                return fetchConfig(params, Object.assign({}, {
                    method: params.requests[0].method,
                }, config));
            case 'POST':
            case 'DELETE':
                params.requests[0].query = params.requests[0].query === undefined ? '' : JSON.stringify(params.requests[0].query)
                return fetchConfig(params, Object.assign({}, {
                    method: params.requests[0].method,
                    body: params.requests[0].query,
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
