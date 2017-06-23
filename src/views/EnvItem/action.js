/**
 *@Author: chad.ding
 *@Date: 2017-06-23 10:08:38
 */

import { fetchData } from '../../resource';
import { CONSOLE_LIST_PATH, CLUSTER_LIST_PATH } from '../../consts/path';
import { GET_CONSOLE_LIST, GET_CLUSTER_LIST } from '../../consts/action';

export function getConsoleList(params) {
    return fetchData(Object.assign({
        category: GET_CONSOLE_LIST,
        query: params
    }, CONSOLE_LIST_PATH));
};

export function getClusterList(params) {
    return fetchData(Object.assign({
        category: GET_CLUSTER_LIST,
        query: params
    }, CLUSTER_LIST_PATH));
};
