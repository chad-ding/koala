/**
 *@Author: chad.ding
 *@Date: 2017-06-22 17:24:46
 */

import { VARIABLE_MODAL_HANDLE } from '../../consts/action';

export default function noteReducer(state = { variableModal: { visible: false } }, action) {
    switch (action.type) {
        case VARIABLE_MODAL_HANDLE:
            return Object.assign({}, state, { variableModal: { visible: action.visible } });
        default:
            return state;
    }
};
