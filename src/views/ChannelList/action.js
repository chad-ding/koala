/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-25 16:05:57
 */

import { fetchData } from '../../resource';
import { CHANNEL_LIST_PATH } from '../../consts/path';
import { GET_CHANNEL_LIST } from '../../consts/action';

export function getChannelList(params) {
    return fetchData(Object.assign({
        category: GET_CHANNEL_LIST,
        query: params
    }, CHANNEL_LIST_PATH));
};
