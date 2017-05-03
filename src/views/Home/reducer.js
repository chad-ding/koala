/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-26 16:27:29
 */

import {RESPONSE_ERROR, SHOW_LOGIN_MODAL, USER_LOGINED} from '../../consts/action';

export default function homeReducer(state = { userInfo: null, showLoginModal: false}, action) {
    switch (action.type) {
        case USER_LOGINED:
            return Object.assign({}, state, { userInfo: action.data });
        case SHOW_LOGIN_MODAL:
            return Object.assign({}, state, { showLoginModal: action.showLoginModal});
        default:
            return state;
    }
}