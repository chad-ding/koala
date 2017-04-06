/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component } from 'react';
import { Tabs, Breadcrumb, Icon, Table } from 'antd';

import './style.less';

const TabPane = Tabs.TabPane;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
    ),
}];

const data = [{
    key: '1',
    name: 'AAAAAA',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'BBBB',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'CCCCCCC',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];


export default class EnvList extends Component {
    constructor(props) {
        super(props);
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
                        <span>Env List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Env
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
                    <TabPane tab="频道" key="1">
                        <Table columns={columns} dataSource={data}></Table>
                    </TabPane>
                    <TabPane tab="队列" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="数据表" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>  
            </div>
        );
    }
};
