/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import { changeTab } from './action';
import ChannelList from '../ChannelList';
import QueueList from '../QueueList';
import VdpList from '../VdpList';

import './style.less';

const TAB_MAP = {
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
    }
    componentWillUnmount(){
        let {dispatch} = this.props;
        dispatch(changeTab('channel'));
    }
    tabChange(key) {
        let { dispatch } = this.props;
        dispatch(changeTab(key));
    }
    render() {
        let TabPane = Tabs.TabPane;

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>接入申请</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {TAB_MAP[this.props.tab]}
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
    tab: PropTypes.string.isRequired
};

Application.defaultProps = {
    tab: 'channel'
};

function mapStateToProps(state) {
    return {
        tab: state.applicationReducer.tab
    };
}

export default connect(mapStateToProps)(Application);
