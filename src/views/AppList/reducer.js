/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-26 16:27:14
 */

import {RECEIVE_DATA, GET_APP_LIST} from '../../consts/action';

export default function appListReducer(state = { appList: [], fetched: false}, action) {
    switch (action.type) {
        case RECEIVE_DATA + GET_APP_LIST:
            return Object.assign({}, state, { appList: action.data.data,  fetched: true});
        default:
            return state;
    }
};