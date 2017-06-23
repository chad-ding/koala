/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-17 16:53:16
 */

import React, { Component } from 'react';
import { Layout, Tabs, Icon, Alert, Input, Table } from 'antd';

import './style.less';

export default class EnvItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { Header, Content } = Layout;
        let TabPane = Tabs.TabPane;

        let consoleCloumns = [{
            title: '控制台',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '账户',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: 'BO',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: '存储引擎',
            dataIndex: 'desc',
            key: 'desc'
        }];

        let clusterCloumns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Kafka',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: 'Zookeeper',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: '频道',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: '队列',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: '健康',
            dataIndex: 'desc',
            key: 'desc'
        },{
            title: '可用节点',
            dataIndex: 'desc',
            key: 'desc'
        }];

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
                        <TabPane tab="控制台" key="terminal">
                            <Table rowKey={record => record.name} columns={consoleCloumns}></Table>
                        </TabPane>
                        <TabPane tab="集群" key="cluster">
                            <Table rowKey={record => record.name} columns={clusterCloumns}></Table>
                        </TabPane>
                    </Tabs>  
                </Content>
            </Layout>
        );
    }
};
