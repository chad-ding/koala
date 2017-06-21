/**
 *@Author: chad.ding
 *@Date: 2017-06-21 16:07:43
 */

import { fetchData } from '../../resource';
import { PARAMS_LIST_PATH } from '../../consts/path';
import { GET_PARAMS_LIST } from '../../consts/action';

export function getParamsList(params) {
    return fetchData(Object.assign({
        category: GET_PARAMS_LIST,
        query: params
    }, PARAMS_LIST_PATH));
};