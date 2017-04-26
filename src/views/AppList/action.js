/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 11:01:45
 */

import {GET_APP_LIST} from '../../consts/action';
import {fetchData} from '../../resource';
import {APP_LIST_PATH} from '../../consts/path';

export function getAppList(params){
    return fetchData(Object.assign({
        category: GET_APP_LIST,
        query: params
    }, APP_LIST_PATH));
};