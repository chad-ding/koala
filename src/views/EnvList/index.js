/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component } from 'react';
import { Row, Col, Menu, Badge, Breadcrumb, Icon, Tag } from 'antd';
import { Link } from 'react-router';

import './style.less';

export default class EnvList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Row gutter={24}>
                    <Col span={6}>
                        <Menu mode="inline" defaultSelectedKeys={['qa']} className="env-container">
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
                                <span>EnvList</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>QA</Breadcrumb.Item>
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
};
