/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 10:23:46
 */

import { combineReducers } from 'redux';
import homeReducer from '../views/Home/reducer';
import applicationReducer from '../views/Application/reducer';
import approvalReducer from '../views/Approval/reducer';
import envListReducer from '../views/EnvList/reducer';
import envAddReducer from '../views/EnvAdd/reducer';
import channelFormReducer from '../views/ChannelForm/reducer';
import channelListReducer from '../views/ChannelList/reducer';
import queueFormReducer from '../views/QueueForm/reducer';
import queueListReducer from '../views/QueueList/reducer';
import sysConfigReducer from '../views/SysConfig/reducer';
import vdpListReducer from '../views/VdpList/reducer';
import codeGenReducer from '../views/CodeGen/reducer';
import domainReducer from '../views/Domain/reducer';
import noteReducer from '../views/Note/reducer';
import envItemReducer from '../views/EnvItem/reducer';
import dashboardReducer from '../views/Dashboard/reducer';

import { REQUEST_FAILED, REQUEST_SUCCESS } from 'consts/action';

function requestReducer(state = { failure: { category: null, count: 0 }, success: { category: null, count: 0 } }, action) {

    switch (action.type) {
        case REQUEST_FAILED:
            return Object.assign({}, state, { failure: { category: action.category, count: state.failure.count + 1 } });
        case REQUEST_SUCCESS:
            return Object.assign({}, state, { success: { category: action.category, count: state.success.count + 1 } });
        default:
            return state;
    }

}

export default combineReducers({
    requestReducer,
    homeReducer,
    applicationReducer,
    approvalReducer,
    envListReducer,
    envAddReducer,
    channelFormReducer,
    channelListReducer,
    queueFormReducer,
    queueListReducer,
    sysConfigReducer,
    vdpListReducer,
    codeGenReducer,
    domainReducer,
    noteReducer,
    envItemReducer,
    dashboardReducer
});