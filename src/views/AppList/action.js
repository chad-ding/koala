/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 11:01:45
 */

import {GET_APP_LIST} from '../../consts/action';
import {fetchData} from '../../resource';

export function getAppList(params){
    return fetchData({
        method: 'GET',
        path: '/meta/getByParent',
        category: GET_APP_LIST,
        query: params
    });
};