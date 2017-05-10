/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:23:46
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/ConfigStore';
import Home from './views/Home';

const store = configStore();

const appList = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/AppList').default);
    }, 'AppList');
};

const envList = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/EnvList').default);
    }, 'EnvList');
};

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute getComponent={appList}></IndexRoute>
                <Route path="app/all" getComponent={appList}></Route>
                <Route path="env/all" getComponent={envList}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));