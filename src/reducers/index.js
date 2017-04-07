/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:23:46
 */

import { combineReducers } from 'redux';
import { USER_LOGINED, GET_APP_LIST, RECEIVE_DATA} from '../consts';

function homeReducer(state = { userInfo: null }, action) {
    switch (action.type) {
        case USER_LOGINED:
            return Object.assign({}, state, { userInfo: action.data });
        default:
            return state;
    }
}

function appReducer(state = { appList: [] }, action) {
    switch (action.type) {
        case RECEIVE_DATA + GET_APP_LIST:
            return Object.assign({}, state, { appList: action.data.data });
        default:
            return state;
    }
}

export default combineReducers({
    homeReducer,
    appReducer
});
