/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:26:43
 */
import { CHANNEL_MODAL_SHOW, GET_SUBSCRIBE_LIST } from '../../consts/action';

export default function queueFormReducer(state = { channelModal: { visible: false, counter: 0 }, subscribeList: [] }, action) {
    switch (action.type) {
        case GET_SUBSCRIBE_LIST:
            return Object.assign({}, state, { subscribeList: action.data });
        case CHANNEL_MODAL_SHOW:
            return Object.assign({}, state, { channelModal: { visible: action.visible, counter: state.channelModal.counter+1 } });
        default:
            return state;
    }
}
