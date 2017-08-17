/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 10:23:46
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/ConfigStore';

let store = configStore();

let home = (location, callback) => {
    import('./views/Home').then(component => {
        callback(null, component.default);
    });
};

let application = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Application').default);
    }, 'Application');
};

let approval = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Approval').default);
    }, 'Approval');
};

let envList = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/EnvList').default);
    }, 'EnvList');
};

let envItem = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/EnvItem').default);
    }, 'EnvItem');
};

let envAdd = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/EnvAdd').default);
    }, 'EnvAdd');
};

let channelForm = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/ChannelForm').default);
    }, 'ChannelForm');
};

let queueForm = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/QueueForm').default);
    }, 'QueueForm');
};

let vdpForm = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/VdpForm').default);
    }, 'VdpForm');
};

let sysConfig = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/SysConfig').default);
    }, 'SysConfig');
};

let baseInfo = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/BaseInfo').default);
    }, 'BaseInfo');
};

let dataDic = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/DataDic').default);
    }, 'DataDic');
};

let codeGen = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/CodeGen').default);
    }, 'CodeGen');
};

let note = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Note').default);
    }, 'Note');
};

let role = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Role').default);
    }, 'Role');
};

let domain = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Domain').default);
    }, 'Domain');
};

let channel = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Channel').default);
    }, 'Channel');
};

let queue = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Queue').default);
    }, 'Queue');
};

let vdp = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Vdp').default);
    }, 'Vdp');
};

let dashboard = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Dashboard').default);
    }, 'Dashboard');
};

let help = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./views/Help').default);
    }, 'Help');
};

render((
    <Provider store={store}>
        <Router history={browserHistory}>
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
                <Route path="help" getComponent={help}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));