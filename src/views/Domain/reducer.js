/**
 *@Author: chad.ding
 *@Date: 2017-06-21 17:40:41
 */

import { GET_DOMAIN_LIST } from '../../consts/action';

export default function domainReducer(state = { domainList: [], fetched: false }, action) {
    switch (action.type) {
        case GET_DOMAIN_LIST:
            return Object.assign({}, state, { domainList: action.data });
        default:
            return state;
    }
};