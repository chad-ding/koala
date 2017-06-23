/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 11:01:45
 */

import { TAB_CHANGE } from '../../consts/action';

export function changeTab(key) {
    return {
        type: TAB_CHANGE,
        tab: key
    };
}
