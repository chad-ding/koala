/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:27:30
 */

import { CHANNEL_MODAL_SHOW } from '../../consts/action';

export function handleModal(display) {
    return {
        type: CHANNEL_MODAL_SHOW,
        visible: display
    };
};
