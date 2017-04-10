/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component, PropTypes } from 'react';
import { Tabs, Breadcrumb, Icon, Table } from 'antd';
import { fetchData } from '../../resource';
import { GET_APP_LIST } from '../../consts/action';
import { connect } from 'react-redux';
import {getAppList} from './action';

import './style.less';

const TabPane = Tabs.TabPane;
const columns = [{
    title: 'Parent',
    dataIndex: 'parent',
    key: 'parent',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
}, {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
}, {
    title: 'Desc',
    dataIndex: 'desc',
    key: 'desc',
}];

class AppList extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        if(!this.props.fetched){
            dispatch(getAppList({ parent: 'occupation' }));
        }
    }
    callback() {

    }
    render() {
        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Tabs defaultActiveKey="channel" onChange={this.callback} type="card">
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
    fetched: PropTypes.bool.isRequired 
};

function mapStateToProps(state) {
    return {
        appList: state.appReducer.appList,
        fetched: state.appReducer.fetched
    };
}

export default connect(mapStateToProps)(AppList);
