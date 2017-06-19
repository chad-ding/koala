/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Menu, Badge, Breadcrumb, Icon, Tag } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { changeTab } from './action';

import './style.less';

const tabMap = {
    qa: 'QA',
    staging: 'STAGING',
    live: 'LIVE',
    prelive: 'PRELIVE',
    addEnv: '添加环境'
};

class EnvList extends Component {
    constructor(props) {
        super(props);
        this.tabChange = this.tabChange.bind(this);
    }
    tabChange(key) {
        const { dispatch } = this.props;
        dispatch(changeTab(key));
    }
    componentDidMount(){
        let route = this.props.routes[this.props.routes.length - 1];
        let path = route.path;
        this.tabChange(path);
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="container">
                <Row gutter={24}>
                    <Col span={6}>
                        <Menu mode="inline" selectedKeys={[this.props.tab]} defaultSelectedKeys={['qa']} className="env-container">
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
                            <Menu.Item key="add">
                                <Tag color="green">+</Tag>
                                <Link to="/env/add" className="env-item">添加环境</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={18}>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Icon type="home" />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
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
};

EnvList.propTypes = {
    tab: PropTypes.string.isRequired
};

EnvList.defaultProps = {
    tab: 'qa'
};

function mapStateToProps(state) {
    return {
        tab: state.envListReducer.tab
    };
}

export default connect(mapStateToProps)(EnvList);
