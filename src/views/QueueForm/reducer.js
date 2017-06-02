/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:26:43
 */
import { CHANNEL_MODAL_SHOW, GET_SUBSCRIBE_LIST, SUBSCRIBE, UNSUBSCRIBE } from '../../consts/action';

export default function queueFormReducer(state = { channelModal: { visible: false, counter: 0 }, subscribeList: [], subscribedChannel: [] }, action) {

    let subscribeList,
        channel,
        subscribedChannel;

    switch (action.type) {
        case SUBSCRIBE:
            subscribeList = state.subscribeList.slice();
            subscribedChannel = state.subscribedChannel.slice();
            channel = action.channel;

            subscribeList.forEach(item => {
                item.subscribed = item.subscribed || channel.id === item.id;
            });
            subscribedChannel.push(channel);
            return Object.assign({}, state, { subscribeList: subscribeList, subscribedChannel: subscribedChannel });
        case UNSUBSCRIBE:
            subscribeList = state.subscribeList.slice();
            channel = action.channel;

            subscribeList.forEach(item => {
                item.subscribed = item.subscribed && channel.id === item.id;
            });

            let subscribedChannel = state.subscribedChannel.filter(item => item.id != channel.id);
            return Object.assign({}, state, { subscribeList: subscribeList, subscribedChannel: subscribedChannel });
        case GET_SUBSCRIBE_LIST:
            return Object.assign({}, state, { subscribeList: action.data });
        case CHANNEL_MODAL_SHOW:
            return Object.assign({}, state, { channelModal: { visible: action.visible, counter: state.channelModal.counter + 1 } });
        default:
            return state;
    }
}
