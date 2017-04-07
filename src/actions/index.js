/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-07 10:32:40
 */
import resource from '../resource';
import {
    REQUEST_DATA, REQUEST_FAILED, RECEIVE_DATA
} from '../consts';


/**
 * 开始请求
 */
function requestData(requests) {
    return {
        type: REQUEST_DATA + requests.category,
        requests,
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
        data: json,
    };
}

/**
 * 请求失败
 */
function requestFailed(requests) {
    return {
        type: REQUEST_FAILED + requests.category,
        requests,
    };
}

/**
 * 发送请求的具体方法
 */
export function fetchData(...requests) {
    return dispatch => {
        dispatch(requestData(requests[0]));
        return resource({
            // method: requests[0].method,
            // path: requests[0].path,
            // query: requests[0].query,
            requests,
            onSuccess: json => dispatch(receiveData(requests[0], json)),
            onFail: error => dispatch(requestFailed(requests[0]))
        });
    };
}