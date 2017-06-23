/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 10:23:46
 */

import { combineReducers } from 'redux';
import homeReducer from '../views/Home/reducer';
import applicationReducer from '../views/Application/reducer';
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

import { REQUEST_FAILED } from '../consts/action';

function requestReducer(state = { errorInfo: { data: null, counter: 0 } }, action) {

    switch (action.type) {
        case REQUEST_FAILED:
            return Object.assign({}, state, { errorInfo: { data: action.data, counter: state.errorInfo.counter++ } });
        default:
            return state;
    }

}

export default combineReducers({
    requestReducer,
    homeReducer,
    applicationReducer,
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
    noteReducer
});
