/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-24 10:18:05
 */

import React, { Component } from 'react';
import { Row, Col, Button, Input, Table, Tooltip, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getQueueList } from './action';

class QueueList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getQueueList());
    }
    render() {
        let { path } = this.props;
        let columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            render: (text, record, index) => <Link to={`/${path}/queue/${record.id}`}>{text}</Link>
        }, {
            title: '项目',
            dataIndex: 'project',
            key: 'project'
        }, {
            title: '存储引擎',
            dataIndex: 'engine',
            key: 'engine'
        }, {
            title: '消费形态',
            dataIndex: 'form',
            key: 'form'
        }, {
            title: '订阅频道',
            dataIndex: 'channel',
            key: 'channel'
        }, {
            title: '用途',
            dataIndex: 'purpose',
            key: 'purpose'
        }, {
            title: '申请',
            dataIndex: 'date',
            key: 'date'
        }, {
            title: '预约期限',
            dataIndex: 'expire',
            key: 'expire'
        }, {
            title: '开发语言',
            dataIndex: 'language',
            key: 'language'
        }, {
            title: '组内广播',
            dataIndex: 'broadcast',
            key: 'broadcast'
        }, {
            title: '流程进度',
            dataIndex: 'state',
            key: 'state',
            render: (text, record, index) => (
                <div>
                    <Tooltip placement="top" title="QA">
                        <Icon className="step-icon step-complete" type="check-circle"></Icon>
                    </Tooltip>
                    <Tooltip placement="top" title="STAGING">
                        <Icon className="step-icon step-processing" type="check-circle"></Icon>
                    </Tooltip>
                    <Tooltip placement="top" title="LIVE">
                        <Icon className="step-icon" type="check-circle"></Icon>
                    </Tooltip>
                    <Tooltip placement="top" title="PRELIVE">
                        <Icon className="step-icon" type="check-circle"></Icon>
                    </Tooltip>
                </div>
            )
        }, {
            title: '操作状态',
            dataIndex: 'status',
            key: 'status'
        }];

        let Search = Input.Search;

        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Search size="large"></Search>
                    </Col>
                    <Col span={2}>
                        &nbsp;&nbsp;<Button size="large" type="primary">搜索</Button>
                    </Col>
                    <Col span={4} offset={12}>
                        {   
                            this.props.path === 'approval' ? '' : 
                            <Button size="large" type="primary">
                                <Link to="/queue/new">申请队列</Link>
                            </Button>
                        }
                    </Col>
                </Row>
                <br/>
                <Table rowKey={record => record.id} columns={columns} dataSource={this.props.queueList}></Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        queueList: state.queueListReducer.queueList
    };
}

export default connect(mapStateToProps)(QueueList);
