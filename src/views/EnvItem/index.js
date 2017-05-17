/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-17 16:53:16
 */

import React, {Component} from 'react';
import {Layout, Tabs, Icon, Alert, Input} from 'antd';

import './index.less';

export default class EnvItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {Header, Content} = Layout;
        const TabPane = Tabs.TabPane;

        return (
            <Layout style={{background: '#FFF'}}>
                <Header className="env-header">
                   <h1>QA&nbsp;&nbsp;<Icon type="delete"></Icon></h1>
                </Header>
                <br/>
                <Content>
                    <Tabs defaultActiveKey="hosts" type="card">
                        <TabPane tab="Hosts" key="hosts">
                            <Alert message="Helps!" type="warning" closable  showIcon description="每个环境都对应了一个配置中心，下面是配置中心的Zookeeper,测试时,修改/etc/hosts或者C:\WINDOWS\System32\drivers\etc\hosts， 可咨询fating.zhang"/>
                            <Input type="textarea" rows={10}></Input>
                        </TabPane>
                        <TabPane tab="控制台" key="terminal">Content of Tab Pane 2</TabPane>
                        <TabPane tab="集群" key="cluster">Content of Tab Pane 3</TabPane>
                    </Tabs>  
                </Content>
            </Layout>
        );
    }
};