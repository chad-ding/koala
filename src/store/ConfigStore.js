/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:23:46
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore);

export default function (initialState) {
    let store = null;
    if (module.hot) {
        store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }else{
        store = createStoreWithMiddleware(rootReducer);
    }
    return store;
};