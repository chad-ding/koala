/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-17 16:53:16
 */

import React, { Component } from 'react';
import { Layout, Tabs, Icon, Alert, Input } from 'antd';
import { connect } from 'react-redux';
import Console from './console';
import Cluster from './cluster';

import './style.less';

class EnvItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { Header, Content } = Layout;
        let TabPane = Tabs.TabPane;

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
                        <TabPane tab="控制台" key="console">
                            <Console></Console>
                        </TabPane>
                        <TabPane tab="集群" key="cluster">
                            <Cluster></Cluster>
                        </TabPane>
                    </Tabs>  
                </Content>
            </Layout>
        );
    }
};

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps)(EnvItem);
