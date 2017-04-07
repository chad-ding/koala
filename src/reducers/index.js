/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:23:46
 */

import { combineReducers } from 'redux';
import { USER_LOGINED, GET_APP_LIST, RECEIVE_DATA, RESPONSE_ERROR} from '../consts';

function homeReducer(state = { userInfo: null, errorInfo: {data: null, counter: 0} }, action) {
    switch (action.type) {
        case USER_LOGINED:
            return Object.assign({}, state, { userInfo: action.data });
        case RESPONSE_ERROR:
            return Object.assign({}, state, { errorInfo: {data: action.data, counter: state.errorInfo.counter++} });
        default:
            return state;
    }
}

function appReducer(state = { appList: []}, action) {
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