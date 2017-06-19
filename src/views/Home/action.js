/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-06-01 23:31:16
 */

import { TAB_CHANGE_HOME } from '../../consts/action';

export function changeTab(key) {
    return {
        type: TAB_CHANGE_HOME,
        tab: key
    };
};
