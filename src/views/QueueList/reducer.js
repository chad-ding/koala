/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-26 10:04:15
 */

import { GET_QUEUE_LIST } from '../../consts/action';

export default function queueListReducer(state = { queueList: [], fetched: false }, action) {
    switch (action.type) {
        case GET_QUEUE_LIST:
            return Object.assign({}, state, { queueList: action.data });
        default:
            return state;
    }
};
