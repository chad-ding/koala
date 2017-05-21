/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-26 16:27:14
 */

import { GET_APP_LIST, TAB_CHANGE} from '../../consts/action';

export default function appListReducer(state = { appList: [], fetched: false, tab: 'channel'}, action) {
    switch (action.type) {
        case GET_APP_LIST:
            return Object.assign({}, state, { appList: action.data.data,  fetched: true});
        case TAB_CHANGE:
        	return Object.assign({}, state, {tab: action.tab});
        default:
            return state;
    }
};