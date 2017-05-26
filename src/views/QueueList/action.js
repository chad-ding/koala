/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-26 09:58:03
 */

import { fetchData } from '../../resource';
import { QUEUE_LIST_PATH } from '../../consts/path';
import { GET_QUEUE_LIST } from '../../consts/action';

export function getQueueList(params) {
    return fetchData(Object.assign({
        category: GET_QUEUE_LIST,
        query: params
    }, QUEUE_LIST_PATH));
};
