/**
 *@Author: chad.ding
 *@Date: 2017-06-28 09:50:20
 */

import { GET_LINE_CHART_DATA, GET_BAR_CHART_DATA, GET_PIE_CHART_DATA, GET_RADAR_CHART_DATA } from '../../consts/action';

export default function dashboardReducer(state = { lineData: [], barData: {}, pieData: [], radarData: {} }, action) {
    switch (action.type) {
        case GET_LINE_CHART_DATA:
            return Object.assign({}, state, { lineData: action.data });
        case GET_BAR_CHART_DATA:
            return Object.assign({}, state, { barData: action.data });
        case GET_PIE_CHART_DATA:
            return Object.assign({}, state, { pieData: action.data });
        case GET_RADAR_CHART_DATA:
            return Object.assign({}, state, { radarData: action.data });
        default:
            return state;
    }
};
