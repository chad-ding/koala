/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component, PropTypes } from 'react';
import { Tabs, Breadcrumb, Icon, Table } from 'antd';
import { connect } from 'react-redux';
import {getAppList, changeTab} from './action';

import './style.less';

const columns = [{
    title: 'Parent',
    dataIndex: 'parent',
    key: 'parent',
    render: text => <a href="javascript:;">{text}</a>
}, {
    title: 'Value',
    dataIndex: 'value',
    key: 'value'
}, {
    title: 'Text',
    dataIndex: 'text',
    key: 'text'
}, {
    title: 'Desc',
    dataIndex: 'desc',
    key: 'desc'
}];

const tabMap = {
    channel: '频道',
    queue: '队列',
    table: '数据表'
};

class AppList extends Component {
    constructor(props) {
        super(props);
        this.tabChange = this.tabChange.bind(this);
    }
    componentDidMount(){
        const { dispatch } = this.props;
        if(!this.props.fetched){
            dispatch(getAppList({ parent: 'occupation' }));
        }
    }
    tabChange(key){
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
                        <span>项目接入</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {tabMap[this.props.tab]}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Tabs defaultActiveKey="channel" onChange={this.tabChange} type="card">
                    <TabPane tab="频道" key="channel">
                        <Table columns={columns} dataSource={this.props.appList}></Table>
                    </TabPane>
                    <TabPane tab="队列" key="queue">Content of Tab Pane 2</TabPane>
                    <TabPane tab="数据表" key="table">Content of Tab Pane 3</TabPane>
                </Tabs>  
            </div>
        );
    }
};

AppList.propTypes = {
    appList: PropTypes.array.isRequired,
    fetched: PropTypes.bool.isRequired,
    tab: PropTypes.string.isRequired
};

AppList.defaultProps = {
    tab: 'channel'
};

function mapStateToProps(state) {
    return {
        appList: state.appListReducer.appList,
        fetched: state.appListReducer.fetched,
        tab: state.appListReducer.tab
    };
}

export default connect(mapStateToProps)(AppList);
