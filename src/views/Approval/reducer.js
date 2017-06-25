/**
 *@Author: chad.ding
 *@Date: 2017-06-25 10:28:05
 */

import { TAB_CHANGE_APPROVAL } from '../../consts/action';

export default function approvalReducer(state = {tab: 'channel'}, action){
	switch(action.type){
		case TAB_CHANGE_APPROVAL:
			return Object.assign({}, state, {tab: action.tab});
		default:
			return state;
	}
};