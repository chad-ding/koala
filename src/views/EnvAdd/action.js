/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 11:33:54
 */

import { PORTAL_MODAL_SHOW, ADD_PORTAL, DEL_PORTAL } from '../../consts/action';

export function handleModal(display) {
    return {
        type: PORTAL_MODAL_SHOW,
        visible: display
    };
};

export function addPortal(portal) {
    return {
        type: ADD_PORTAL,
        portal: portal
    };
};

export function delPortal(index){
    return {
        type: DEL_PORTAL,
        index: index
    };
};
