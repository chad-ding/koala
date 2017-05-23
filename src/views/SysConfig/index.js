/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 19:13:43
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col, Menu, Breadcrumb, Icon } from 'antd';
import { changeTab } from './action';

import './style.less';

const tabMap = {
    baseInfo: '基本信息',
    dataDic: '数据字典',
    codeGen: '代码生成',
    note: '通知设置',
    role: '角色设置',
    domain: '域设置'
};

class SysConfig extends Component {
    constructor(props) {
        super(props);
        this.tabChange = this.tabChange.bind(this);
    }
    tabChange(item, key, keyPath) {
        const { dispatch } = this.props;
        dispatch(changeTab(item.key));
    }
    routerWillLeave(nextLocation) {
        if (!this.state.isSaved){
            return 'Your work is not saved! Are you sure you want to leave?';
        }
    }
    componentDidMount() {
        console.log('sys config startup...');
    }
    componentWillUnmount() {
        const { dispatch } = this.props;
        //dispatch(changeTab('baseInfo'));
    }
    render() {
        return (
            <div className="container">
                <Row gutter={24}>
                    <Col span={6}>
                        <Menu onClick={this.tabChange} mode="inline" selectedKeys={[this.props.tab]} defaultSelectedKeys={['baseInfo']} className="sys-container">
                            <Menu.Item key="baseInfo">
                                <Link to="/sys/baseInfo" className="sys-item">基本信息</Link>
                                <Icon className="env-icon" type="right"></Icon>
                            </Menu.Item>
                            <Menu.Item key="dataDic">
                                <Link to="/sys/dataDic" className="sys-item">数据字典</Link>
                                <Icon className="env-icon" type="right"></Icon>
                            </Menu.Item>
                            <Menu.Item key="codeGen">
                                <Link to="/sys/codeGen" className="sys-item">代码生成</Link>
                                <Icon className="env-icon" type="right"></Icon>
                            </Menu.Item>
                            <Menu.Item key="note">
                                <Link to="/sys/note" className="sys-item">通知设置</Link>
                                <Icon className="env-icon" type="right"></Icon>
                            </Menu.Item>
                            <Menu.Item key="role">
                                <Link to="/sys/role" className="sys-item">角色设置</Link>
                                <Icon className="env-icon" type="right"></Icon>
                            </Menu.Item>
                            <Menu.Item key="domain">
                                <Link to="/sys/domain" className="sys-item">域设置</Link>
                                <Icon className="env-icon" type="right"></Icon>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={18}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="">
                                <Icon type="home" />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <span>环境管理</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{tabMap[this.props.tab]}</Breadcrumb.Item>
                        </Breadcrumb>
                        <br/>
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tab: state.sysConfigReducer.tab
    };
}

SysConfig.propTypes = {
    tab: PropTypes.string.isRequired
};

SysConfig.defaultProps = {
    tab: 'baseInfo'
};

export default connect(mapStateToProps)(SysConfig);