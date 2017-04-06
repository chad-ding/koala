/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:23:46
 */

import { combineReducers } from 'redux';
import { HOME, USER_LOGINED } from '../consts';

function homeReducer(state = { userInfo: null }, action) {
    switch (action.type) {
        case USER_LOGINED:
            return Object.assign({}, state, { userInfo: action.data });
        default:
            return state;
    }
}

export default combineReducers({
    homeReducer
});