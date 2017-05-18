/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 19:13:43
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col, Menu, Badge, Breadcrumb, Icon, Tag } from 'antd';

const tabMap = {
    baseInfo: '基本信息',
    dataDic: '数据字典',
    codeGen: '代码生成',
    noteSetting: '通知设置',
    roleSetting: '角色设置',
    domainSetting: '域设置'
};

export default class SysConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="container">
                <Row gutter={24}>
                    <Col span={6}>
                        <Menu onClick={this.tabChange} mode="inline" defaultSelectedKeys={['qa']} className="env-container">
                            <Menu.Item key="qa">
                                <Tag color="green">1</Tag>
                                <Link to="/env/item" className="env-item">QA</Link>
                                <Badge count={200} overflowCount={999} className="env-badge"></Badge>
                            </Menu.Item>
                            <Menu.Item key="staging">
                                <Tag color="green">2</Tag>
                                <Link to="/env/item" className="env-item">STAGING</Link>
                                <Badge count={200} overflowCount={999} className="env-badge"></Badge>
                            </Menu.Item>
                            <Menu.Item key="live">
                                <Tag color="green">3</Tag>
                                <Link to="/env/item" className="env-item">LIVE</Link>
                                <Badge count={200} overflowCount={999} className="env-badge"></Badge>
                            </Menu.Item>
                            <Menu.Item key="prelive">
                                <Tag color="green">4</Tag>
                                <Link to="/env/item" className="env-item">PRELIVE</Link>
                                <Badge count={200} overflowCount={999} className="env-badge"></Badge>
                            </Menu.Item>
                            <Menu.Item key="addEnv">
                                <Tag color="green">+</Tag>
                                <Link to="/env/add" className="env-item">添加环境</Link>
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
