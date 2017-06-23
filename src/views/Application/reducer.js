/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-26 16:27:14
 */

import { TAB_CHANGE} from '../../consts/action';

export default function applicationReducer(state = { appList: [], fetched: false, tab: 'channel'}, action) {
    switch (action.type) {
        case TAB_CHANGE:
        	return Object.assign({}, state, {tab: action.tab});
        default:
            return state;
    }
};