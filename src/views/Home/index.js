/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 11:17:32
 */

import React, { Component } from 'react';
import {Link} from 'react-router';
import {Layout, Row, Col, Menu, Dropdown, Icon, notification} from 'antd';
import {connect} from 'react-redux';

import './style.less';

const {Header, Sider, Content, Footer} = Layout;
const menus = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">
                <Icon type="mail"></Icon>&nbsp;&nbsp;&nbsp;&nbsp;反馈
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">
                <Icon type="logout"></Icon>&nbsp;&nbsp;&nbsp;&nbsp;退出
            </a>
        </Menu.Item>
    </Menu>
);

const navs = (
    <Menu mode="horizontal" defaultSelectedKeys={['app']} theme="dark">
        <Menu.Item key="app">
            <Link to="/app/all">项目接入</Link>
        </Menu.Item>
        <Menu.Item key="env">
            <Link to="/env/all">环境管理</Link>
        </Menu.Item>
        <Menu.Item key="setting">
            系统设置
        </Menu.Item>
        <Menu.Item key="monitor">
            系统监控
        </Menu.Item>
    </Menu>
);

class Home extends Component {
    constructor(props) {
        super(props);
        this.logo = require('../../../assets/img/logo.png');
    }
    componentWillReceiveProps(nextProps){
         if(this.props.errorInfo.counter !== nextProps.errorInfo.counter){
             notification.open({
    message: nextProps.errorInfo.data.cod,
    description: nextProps.errorInfo.data.msg,
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
         }
    }
    render() {
        return (
            <Layout className="vesta">
                <Header className="header">
                    <Row gutter={16}>
                        <Col span={4}>
                            <Link to="/"><img src={this.logo} alt=""/></Link>
                        </Col>
                        <Col span={18} className="menu">
                            {navs}
                        </Col>
                        <Col span={2}>
                            <Dropdown overlay={menus}>
                                <a className="ant-dropdown-link out" href="#">
                                    百立荣<Icon type="down" />
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content className="content">
                    <Row>
                        <Col span={24}>
                            {React.cloneElement(this.props.children, {
                                key: this.props.location.pathname
                            })}
                        </Col> 
                    </Row>
                </Content>
                <Footer>
                    <Row align="center">
                        <Col span={11}></Col>
                        <Col span={2}>© 2015 Vesta Beta</Col>
                        <Col span={11}></Col>
                    </Row>
                </Footer>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.homeReducer.userInfo,
        errorInfo: state.homeReducer.errorInfo
    };
}

export default connect(mapStateToProps)(Home);