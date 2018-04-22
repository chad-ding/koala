/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 10:23:46
 */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './configStore';
import Promise from 'promise-polyfill';

//低版本的浏览器不支持promise
if (!window.Promise) {
    window.Promise = Promise;
}

const store = configStore();

const home = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Home').default);
    }, 'Home');
};

const application = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Application').default);
    }, 'Application');
};

const approval = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Approval').default);
    }, 'Approval');
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

const queueForm = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/QueueForm').default);
    }, 'QueueForm');
};

const vdpForm = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/VdpForm').default);
    }, 'VdpForm');
};

const sysConfig = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/SysConfig').default);
    }, 'SysConfig');
};

const baseInfo = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/BaseInfo').default);
    }, 'BaseInfo');
};

const dataDic = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/DataDic').default);
    }, 'DataDic');
};

const codeGen = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/CodeGen').default);
    }, 'CodeGen');
};

const note = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Note').default);
    }, 'Note');
};

const role = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Role').default);
    }, 'Role');
};

const domain = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Domain').default);
    }, 'Domain');
};

const channel = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Channel').default);
    }, 'Channel');
};

const queue = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Queue').default);
    }, 'Queue');
};

const vdp = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Vdp').default);
    }, 'Vdp');
};

const dashboard = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Dashboard').default);
    }, 'Dashboard');
};

const help = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Help').default);
    }, 'Help');
};

const monitor = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Monitor').default);
    }, 'Monitor');
};

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" getComponent={home}>
                <IndexRoute getComponent={application}></IndexRoute>
                <Route path="application">
                    <Route path="list" getComponent={application}></Route>
                    <Route path="channel/:id" getComponent={channel}></Route>
                    <Route path="queue/:id" getComponent={queue}></Route>
                    <Route path="vdp/:id" getComponent={vdp}></Route>
                </Route>
                <Route path="approval">
                    <Route path="list" getComponent={approval}></Route>
                    <Route path="channel/:id" getComponent={channel}></Route>
                    <Route path="queue/:id" getComponent={queue}></Route>
                    <Route path="vdp/:id" getComponent={vdp}></Route>
                </Route>
                <Route path="channel/new" getComponent={channelForm}></Route>
                <Route path="queue/new" getComponent={queueForm}></Route>
                <Route path="vdp/new" getComponent={vdpForm}></Route>
                <Route path="channel/:id" getComponent={channel}></Route>
                <Route path="queue/:id" getComponent={queue}></Route>
                <Route path="vdp/:id" getComponent={vdp}></Route>
                <Route path="env" getComponent={envList}>
                    <IndexRoute getComponent={envItem}></IndexRoute>
                    <Route path="item" getComponent={envItem}></Route>
                    <Route path="add" getComponent={envAdd}></Route>
                </Route>
                <Route path="sys" getComponent={sysConfig}>
                    <IndexRoute getComponent={baseInfo}></IndexRoute>
                    <Route path="baseInfo" getComponent={baseInfo}></Route>
                    <Route path="dataDic" getComponent={dataDic}></Route>
                    <Route path="codeGen" getComponent={codeGen}></Route>
                    <Route path="note" getComponent={note}></Route>
                    <Route path="role" getComponent={role}></Route>
                    <Route path="domain" getComponent={domain}></Route>
                </Route>
                <Route path="dashboard" getComponent={dashboard}></Route>
                <Route path="monitor" getComponent={monitor}></Route>
                <Route path="help" getComponent={help}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));