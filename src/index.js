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

const envItem = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/EnvItem').default);
    }, 'EnvItem');
};

const envAdd = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/EnvAdd').default);
    }, 'EnvAdd');
};

const channelForm = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/ChannelForm').default);
    }, 'ChannelForm');
};

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute getComponent={appList}></IndexRoute>
                <Route path="app/all" getComponent={appList}></Route>
                <Route path="channel/new" getComponent={channelForm}></Route>
                <Route path="env" getComponent={envList}>
                    <IndexRoute getComponent={envItem}></IndexRoute>
                    <Route path="item" getComponent={envItem}></Route>
                    <Route path="add" getComponent={envAdd}></Route>
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));