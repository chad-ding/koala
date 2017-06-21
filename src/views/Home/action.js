/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-06-01 23:31:16
 */

import { LOGIN, TAB_CHANGE_HOME, LOGIN_MODAL_CONTROL } from '../../consts/action';
import { fetchData } from '../../resource';
import { LOGIN_PATH } from '../../consts/path';

export function changeTab(key) {
    return {
        type: TAB_CHANGE_HOME,
        tab: key
    };
};

export function loginModalControl(visible){
	return { 
		type: LOGIN_MODAL_CONTROL,
		visible: visible 
	};

};

export function login(params) {
    return fetchData(Object.assign({
        category: LOGIN,
        query: params
    }, LOGIN_PATH));
};