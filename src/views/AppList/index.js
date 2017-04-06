/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component } from 'react';
import {Tabs, Breadcrumb, Icon} from 'antd';

import './style.less';

const TabPane = Tabs.TabPane;

export default class AppList extends Component {
    constructor(props) {
        super(props);
    }
    callback(){

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
                <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
                    <TabPane tab="频道" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="队列" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="数据表" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>  
            </div> 
        );
    }
};
