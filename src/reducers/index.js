/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:23:46
 */

import { combineReducers } from 'redux';
import homeReducer from '../views/Home/reducer';
import appListReducer from '../views/AppList/reducer';

import { REQUEST_FAILED } from '../consts/action';

function requestReducer(state = { errorInfo: { data: null, counter: 0} }, action) {

    switch (action.type) {
        case REQUEST_FAILED:
            return Object.assign({}, state, { errorInfo: { data: action.data, counter: ++state.errorInfo.counter } });
        default:
            return state;
    }

}

export default combineReducers({
    requestReducer,
    homeReducer,
    appListReducer
});
