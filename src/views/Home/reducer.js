/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-26 16:27:29
 */

import { TAB_CHANGE_HOME, LOGIN_MODAL_SHOW, USER_LOGINED } from '../../consts/action';

export default function homeReducer(state = { userInfo: null, tab: 'application', loginModal: { visible: false, counter: 0 } }, action) {
    switch (action.type) {
        case TAB_CHANGE_HOME:
            return Object.assign({}, state, { tab: action.tab });
        case USER_LOGINED:
            return Object.assign({}, state, { userInfo: action.data });
        case LOGIN_MODAL_SHOW:
            return Object.assign({}, state, { loginModal: { visible: action.visible, counter: ++state.loginModal.counter } });
        default:
            return state;
    }
}
