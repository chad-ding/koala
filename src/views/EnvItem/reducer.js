/**
 *@Author: chad.ding
 *@Date: 2017-06-23 10:08:52
 */

import { GET_CONSOLE_LIST, GET_CLUSTER_LIST } from '../../consts/action';

export default function envItemReducer(state = { consoleList: [], clusterList: [] }, action) {
    switch (action.type) {
        case GET_CONSOLE_LIST:
            return Object.assign({}, state, { consoleList: action.data });
        case GET_CLUSTER_LIST:
            return Object.assign({}, state, { clusterList: action.data });
        default:
            return state;
    }
};
