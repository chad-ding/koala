/**
 *@Author: chad.ding
 *@Date: 2017-06-21 17:39:19
 */

import { fetchData } from '../../commons/resource';
import { DOMAIN_LIST_PATH } from '../../consts/path';
import { GET_DOMAIN_LIST } from '../../consts/action';

export function getDomainList(params) {
    return fetchData(Object.assign({
        category: GET_DOMAIN_LIST,
        query: params
    }, DOMAIN_LIST_PATH));
};
