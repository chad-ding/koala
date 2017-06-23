/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:27:30
 */

import { CHANNEL_MODAL_HANDLE } from '../../consts/action';
import { fetchData } from '../../resource';
import { SUBSCRIBE_LIST_PATH } from '../../consts/path';
import { GET_SUBSCRIBE_LIST, SUBSCRIBE, UNSUBSCRIBE } from '../../consts/action';

export function getSubscribeList(params) {
    return fetchData(Object.assign({
        category: GET_SUBSCRIBE_LIST,
        query: params
    }, SUBSCRIBE_LIST_PATH));
};

export function handleModal(visible) {
    return {
        type: CHANNEL_MODAL_HANDLE,
        visible: visible
    };
};

export function subscribe(channel){
	return {
		type: SUBSCRIBE,
		channel: channel
	};
};

export function unsubscribe(channel){
    return {
        type: UNSUBSCRIBE,
        channel: channel
    };
};
