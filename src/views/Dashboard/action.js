/**
 *@Author: chad.ding
 *@Date: 2017-06-28 09:48:50
 */

import { fetchData } from '../../resource';
import { LINE_CHART_PATH } from '../../consts/path';
import { GET_LINE_CHART_DATA } from '../../consts/action';

export function getLineChartData(params) {
    return fetchData(Object.assign({
        category: GET_LINE_CHART_DATA,
        query: params
    }, LINE_CHART_PATH));
};
