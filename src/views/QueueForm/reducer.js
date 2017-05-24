/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:26:43
 */
import { CHANNEL_MODAL_SHOW } from '../../consts/action';

export default function queueFormReducer(state = {channelModal: { visible: false, counter: 0 }}, action) {
    switch (action.type) {
        case CHANNEL_MODAL_SHOW:
            return Object.assign({}, state, { channelModal: { visible: action.visible, counter: ++state.channelModal.counter } });
        default:
            return state;
    }
}
