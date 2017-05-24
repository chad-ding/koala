/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import { getAppList, changeTab } from './action';
import ChannelList from '../ChannelList';
import QueueList from '../QueueList';
import VdpList from '../VdpList';

import './style.less';

const tabMap = {
    channel: '频道',
    queue: '队列',
    table: '数据表'
};

class Application extends Component {
    constructor(props) {
        super(props);
        this.tabChange = this.tabChange.bind(this);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        if (!this.props.fetched) {
            dispatch(getAppList({ parent: 'occupation' }));
        }
    }
    tabChange(key) {
        const { dispatch } = this.props;
        dispatch(changeTab(key));
    }
    render() {
        const TabPane = Tabs.TabPane;

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>接入申请</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {tabMap[this.props.tab]}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Tabs defaultActiveKey="channel" onChange={this.tabChange} type="card">
                    <TabPane tab="频道" key="channel">
                        <ChannelList path={this.props.route.path}></ChannelList>
                    </TabPane>
                    <TabPane tab="队列" key="queue">
                        <QueueList path={this.props.route.path}></QueueList>
                    </TabPane>
                    <TabPane tab="数据表" key="table">
                        <VdpList path={this.props.route.path}></VdpList>
                    </TabPane>
                </Tabs>  
            </div>
        );
    }
};

Application.propTypes = {
    appList: PropTypes.array.isRequired,
    fetched: PropTypes.bool.isRequired,
    tab: PropTypes.string.isRequired
};

Application.defaultProps = {
    tab: 'channel'
};

function mapStateToProps(state) {
    return {
        appList: state.applicationReducer.appList,
        fetched: state.applicationReducer.fetched,
        tab: state.applicationReducer.tab
    };
}

export default connect(mapStateToProps)(Application);