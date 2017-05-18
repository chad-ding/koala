/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 09:57:08
 */

import { TAB_CHANGE } from '../../consts/action';

export default function envListReducer(state = { tab: 'qa' }, action) {
    switch (action.type) {
        case TAB_CHANGE:
            return Object.assign({}, state, { tab: action.tab });
        default:
            return state;
    }
};
