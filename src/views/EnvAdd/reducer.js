/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 11:05:30
 */

import { PORTAL_MODAL_SHOW, ADD_PORTAL } from '../../consts/action';

export default function envAddReducer(state = { portalModal: { visible: false, counter: 0 }, portalList: [] }, action) {
    switch (action.type) {
        case PORTAL_MODAL_SHOW:
            return Object.assign({}, state, { portalModal: { visible: action.visible, counter: ++state.portalModal.counter } });
        case ADD_PORTAL:
            let portalList = state.portalList;
            portalList.push(action.portal);
            return Object.assign({}, state, { portalList: portalList });
        default:
            return state;
    }
};
