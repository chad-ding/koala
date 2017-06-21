/**
 *@Author: chad.ding
 *@Date: 2017-06-21 16:09:28
 */

import { GET_PARAMS_LIST } from '../../consts/action';

export default function codeGenReducer(state = { paramsList: [], fetched: false }, action) {
    switch (action.type) {
        case GET_PARAMS_LIST:
            return Object.assign({}, state, { paramsList: action.data });
        default:
            return state;
    }
};