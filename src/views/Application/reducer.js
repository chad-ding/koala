/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-26 16:27:14
 */

import { TAB_CHANGE_APPLICATION } from '../../consts/action';

export default function applicationReducer(state = { tab: 'channel' }, action) {
    switch (action.type) {
        case TAB_CHANGE_APPLICATION:
            return Object.assign({}, state, { tab: action.tab });
        default:
            return state;
    }
};
