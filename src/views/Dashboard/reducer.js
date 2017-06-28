/**
 *@Author: chad.ding
 *@Date: 2017-06-28 09:50:20
 */

import { GET_LINE_CHART_DATA } from '../../consts/action';

export default function dashboardReducer(state = { lineData: [] }, action) {
    switch (action.type) {
        case GET_LINE_CHART_DATA:
            return Object.assign({}, state, { lineData: action.data });
        default:
            return state;
    }
};
