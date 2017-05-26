/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-25 15:37:12
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Icon, Row, Col, Steps, Table } from 'antd';
import { Link } from 'react-router';

import './style.less';

class Queue extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const Step = Steps.Step;

        const columns = [{
            title: '频道名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '路由',
            dataIndex: 'route',
            key: 'route'
        }];

        const tableData = [{
            id: 1,
            name: 'AAAA',
            route: '*'
        },{
            id: 2,
            name: 'BBBB',
            route: '*'
        },{
            id: 3,
            name: 'CCCC',
            route: '*'
        }]

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/application">接入申请</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>频道</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Steps current={3}>
                    <Step status="finish" title="QA" icon={<Icon type="check-circle" />} />
                    <Step status="finish" title="STAGING" icon={<Icon type="check-circle" />} />
                    <Step status="process" title="LIVE" icon={<Icon type="check-circle" />} />
                    <Step status="wait" title="PRELIVE" icon={<Icon type="check-circle" />} />
                </Steps>
                <br/><br/>
                <h2>基本信息</h2>
                <br/><hr/><br/>
                <Row>
                    <Col span={4} className="label">队列名称:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">vhost:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">组内广播:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">操作或状态:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">BO:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">创建时间:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">部门:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">存活时间:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">订阅频道:</Col>
                    <Col span={20}>
                        <Table rowKey={record => record.id} columns={columns} dataSource={tableData}></Table>
                    </Col>
                </Row>
                <h2>容量预估</h2>
                <br/><hr/><br/>
                <Row>
                    <Col span={4} className="label">应用规划数:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">总流量预估:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">消息体预估:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <h2>项目信息</h2>
                <br/><hr/><br/>
                <Row>
                    <Col span={4} className="label">App ID:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">项目名称:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">用途:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">存储引擎:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">消息形态:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">开发语言:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
                <Row>
                    <Col span={4} className="label">用途说明:</Col>
                    <Col span={20} className="text">dddddddddddddddddddddddddddddddd</Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Queue);
