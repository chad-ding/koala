/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 10:41:15
 */

import { TAB_CHANGE_SYS } from '../../consts/action';

export function changeTab(key) {
    return {
        type: TAB_CHANGE_SYS,
        tab: key
    };
};
