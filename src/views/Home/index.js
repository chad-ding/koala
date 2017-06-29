/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 11:17:32
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Row, Col, Menu, Dropdown, Icon, notification, Input } from 'antd';
import { connect } from 'react-redux';
import Login from './loginModal';
import { changeTab, handleModal } from './action';

import './style.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.tabChange = this.tabChange.bind(this);
    }
    tabChange(item, key, keyPath) {
        let { dispatch } = this.props;
        dispatch(changeTab(item.key));
    }
    componentDidMount() {
        let route = this.props.routes[1];
        let path = route.path;

        if (path === undefined || /^(?:channel|queue|vdp)\/\w+$/.test(path)) {
            path = 'application';
        }

        this.tabChange({ key: path });
    }
    componentWillUnmount() {
        console.info('%ckoala app shutdown..', 'color:rgba(187, 0, 0, 1);');
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.errorInfo.counter !== nextProps.errorInfo.counter) {
            notification.open({
                message: nextProps.errorInfo.data.code,
                description: nextProps.errorInfo.data.msg,
                icon: <Icon type="smile-circle" style={{color: '#108ee9'}} />
            });
        }
    }
    showLoginModal() {
        let { dispatch } = this.props;
        dispatch(handleModal(true));
    }
    render() {
        let Search = Input.Search;
        let { Header, Content, Footer } = Layout;
        let logo = require('../../../assets/img/logo.png');

        let menus = (
            <Menu>
                <Menu.Item>
                    <Link to="/help">
                        <Icon type="info-circle-o"></Icon>&nbsp;&nbsp;&nbsp;&nbsp;帮助
                    </Link>
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

        let navs = (
            <Menu mode="horizontal" onClick={this.tabChange} selectedKeys={[this.props.tab]} defaultSelectedKeys={['application']} theme="dark">
                <Menu.Item key="application">
                    <Link to="/application/list">我的申请</Link>
                </Menu.Item>
                <Menu.Item key="approval">
                    <Link to="/approval/list">我的审批</Link>
                </Menu.Item>
                <Menu.Item key="env">
                    <Link to="/env/item">环境管理</Link>
                </Menu.Item>
                <Menu.Item key="sys">
                    <Link to="/sys/baseInfo">系统设置</Link>
                </Menu.Item>
                <Menu.Item key="dashboard">
                    <Link to="/dashboard">系统监控</Link>    
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout>
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
                        <Col span={4}>© 2017 Koala Web App</Col>
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
        errorInfo: state.requestReducer.errorInfo,
        tab: state.homeReducer.tab
    };
}

export default connect(mapStateToProps)(Home);
