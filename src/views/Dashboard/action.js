/**
 *@Author: chad.ding
 *@Date: 2017-06-28 09:48:50
 */

import { fetchData } from '../../commons/resource';
import { LINE_CHART_PATH, BAR_CHART_PATH, PIE_CHART_PATH, RADAR_CHART_PATH, TOPOLOGICAL_CHART_PATH } from '../../consts/path';
import { GET_LINE_CHART_DATA, GET_BAR_CHART_DATA, GET_PIE_CHART_DATA, GET_RADAR_CHART_DATA, GET_TOPOLOGICAL_CHART_DATA } from '../../consts/action';

export function getLineChartData(params) {
    return fetchData(Object.assign({
        category: GET_LINE_CHART_DATA,
        query: params
    }, LINE_CHART_PATH));
};

export function getBarChartData(params) {
    return fetchData(Object.assign({
        category: GET_BAR_CHART_DATA,
        query: params
    }, BAR_CHART_PATH));
};

export function getPieChartData(params) {
    return fetchData(Object.assign({
        category: GET_PIE_CHART_DATA,
        query: params
    }, PIE_CHART_PATH));
};

export function getRadarChartData(params) {
    return fetchData(Object.assign({
        category: GET_RADAR_CHART_DATA,
        query: params
    }, RADAR_CHART_PATH));
};

export function getTopologicalChartData(params) {
    return fetchData(Object.assign({
        category: GET_TOPOLOGICAL_CHART_DATA,
        query: params
    }, TOPOLOGICAL_CHART_PATH));
};