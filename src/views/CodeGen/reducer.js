/**
 *@Author: chad.ding
 *@Date: 2017-06-21 16:09:28
 */

import { GET_PARAMS_LIST, PARAMS_MODAL_CONTROL } from '../../consts/action';

export default function codeGenReducer(state = { paramsList: [], fetched: false, paramsModal: { visible: false, counter: 0 } }, action) {
    switch (action.type) {
        case GET_PARAMS_LIST:
            return Object.assign({}, state, { paramsList: action.data });
        case PARAMS_MODAL_CONTROL:
            return Object.assign({}, state, { paramsModal: { visible: action.visible, counter: ++state.paramsModal.counter } });
        default:
            return state;
    }
};
