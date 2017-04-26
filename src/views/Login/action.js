/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-26 16:18:56
 */

import {LOGIN} from '../../consts/action';
import {fetchData} from '../../resource';
import {LOGIN_PATH} from '../../consts/path';

export function login(params){
    return fetchData(Object.assign({
        category: LOGIN,
        query: params
    }, LOGIN_PATH));
};