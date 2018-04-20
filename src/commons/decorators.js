/**
 *@Author: chad.ding
 *@Date: 2018-04-20 11:31:08
 */

import { RESET_REDUCER } from 'consts/action';
import { isEmpty, isNull, noop } from 'commons/utils';

export function reset(initReducer) {
    if (isEmpty(initReducer)) {
        return;
    }

    let validation = Object.keys(initReducer).every(key => key.endsWith('Reducer'));
    if (!validation) {
        console.error('param object is invalid, reset decorator is not working');
        return noop;
    }

    return function(clazz) {
        const handleUnmount = clazz.prototype.componentWillUnmount;

        clazz.prototype.componentWillUnmount = function() {

            const dispatch = this.props.dispatch;

            dispatch({
                type: RESET_REDUCER,
                data: initReducer
            });
            if (!isNull(handleUnmount) && (typeof handleUnmount === 'function')) {
                handleUnmount.call(this);
            }
        };

    };
};