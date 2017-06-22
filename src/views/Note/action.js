/**
 *@Author: chad.ding
 *@Date: 2017-06-22 17:21:08
 */

import { VARIABLE_MODAL_HANDLE } from '../../consts/action';

export function handleModal(visible){
	return {
		type: VARIABLE_MODAL_HANDLE,
		visible: visible
	};
};