/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-25 16:07:53
 */

import { GET_CHANNEL_LIST } from '../../consts/action';

export default function channelListReducer(state = { channelList: [], fetched: false }, action) {
    switch (action.type) {
        case GET_CHANNEL_LIST:
            return Object.assign({}, state, { channelList: action.data });
        default:
            return state;
    }
};
