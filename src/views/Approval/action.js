/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 11:01:45
 */

import { TAB_CHANGE } from '../../consts/action';
import { fetchData } from '../../resource';
import { APP_LIST_PATH } from '../../consts/path';

export function changeTab(key) {
    return {
        type: TAB_CHANGE,
        tab: key
    };
}
