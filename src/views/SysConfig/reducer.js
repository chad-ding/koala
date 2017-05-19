/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 10:43:08
 */

import {TAB_CHANGE_SYS} from '../../consts/action';

export default function sysConfigReducer(state = {tab: 'baseInfo'}, action){
    switch(action.type){
        case TAB_CHANGE_SYS:
            return Object.assign({}, state, {tab: action.tab});
        default:
            return state;
    }
};