/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 11:17:32
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Row, Col, Menu, Dropdown, Icon, notification, Input } from 'antd';
import { connect } from 'react-redux';
import Login from '../Login';
import { SHOW_LOGIN_MODAL } from '../../consts/action';

import './style.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.showLoginModal = this.showLoginModal.bind(this);
    }
    componentDidMount(){
        console.info('koala app startup...');
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.errorInfo.counter !== nextProps.errorInfo.counter) {
            notification.open({
                message: nextProps.errorInfo.data.code,
                description: nextProps.errorInfo.data.msg,
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
            });
        }
    }
    showLoginModal() {
        const { dispatch } = this.props;
        dispatch({ type: SHOW_LOGIN_MODAL, visible: true });
    }
    render() {
        const Search = Input.Search;
        const { Header, Content, Footer } = Layout;
        const logo = require('../../../assets/img/logo.png');

        const menus = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="javascript:;">
                        <Icon type="mail"></Icon>&nbsp;&nbsp;&nbsp;&nbsp;反馈
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={this.showLoginModal} rel="noopener noreferrer" href="javascript:;">
                        <Icon type="unlock"></Icon>&nbsp;&nbsp;&nbsp;&nbsp;登录
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
                    <Link to="/env/item">环境管理</Link>
                </Menu.Item>
                <Menu.Item key="setting">
                    <Link to="/sys/baseInfo">系统设置</Link>
                </Menu.Item>
                <Menu.Item key="monitor">
                    系统监控
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout className="koala">
                <Header className="header">
                    <Row gutter={16}>
                        <Col span={4}>
                            <Link to="/"><img src={logo} className="logo" alt="image not found"/></Link>
                        </Col>
                        <Col span={14} className="menu">
                            {navs}
                        </Col>
                        <Col span={4}>
                            <Search size="large" placeholder="请输入关键字"></Search>
                        </Col>
                        <Col span={2}>
                            <Dropdown.Button size="large" overlay={menus}>
                                <Icon type="laptop"></Icon>操作
                            </Dropdown.Button>
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
                        <Col span={10}></Col>
                        <Col span={4}>© 2015 Koala Web App</Col>
                        <Col span={10}></Col>
                    </Row>
                </Footer>
                <Login></Login>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.homeReducer.userInfo,
        errorInfo: state.requestReducer.errorInfo
    };
}

export default connect(mapStateToProps)(Home);
