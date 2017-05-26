/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-26 11:15:59
 */

import { GET_VDP_LIST } from '../../consts/action';

export default function vdpListReducer(state = { vdpList: [], fetched: false }, action) {
    switch (action.type) {
        case GET_VDP_LIST:
            return Object.assign({}, state, { vdpList: action.data });
        default:
            return state;
    }
};
