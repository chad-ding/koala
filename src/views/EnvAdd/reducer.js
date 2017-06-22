/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 11:05:30
 */

import { PORTAL_MODAL_HANDLE, ADD_PORTAL, DEL_PORTAL } from '../../consts/action';

export default function envAddReducer(state = { portalModal: { visible: false, counter: 0 }, portalList: [] }, action) {
    let portalList;
    switch (action.type) {
        case PORTAL_MODAL_HANDLE:
            return Object.assign({}, state, { portalModal: { visible: action.visible, counter: ++state.portalModal.counter } });
        case ADD_PORTAL:
            portalList = [action.portal].concat(state.portalList);
            return Object.assign({}, state, { portalList: portalList });
        case DEL_PORTAL:
            let index = action.index;
            state.portalList.splice(index, 1);
            return Object.assign({}, state, { portalList: state.portalList.slice() });
        default:
            return state;
    }
};