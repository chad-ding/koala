/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-26 11:11:23
 */

import { fetchData } from '../../commons/resource';
import { VDP_LIST_PATH } from '../../consts/path';
import { GET_VDP_LIST } from '../../consts/action';

export function getVdpList(params){
    return fetchData(Object.assign({
        category: GET_VDP_LIST,
        query: params
    }, VDP_LIST_PATH));
};