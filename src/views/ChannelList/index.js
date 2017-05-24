/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-24 10:10:36
 */

import React, { Component } from 'react';
import { Row, Col, Button, Input, Table } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ChannelList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {

        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>
        }, {
            title: '项目',
            dataIndex: 'project',
            key: 'project'
        }, {
            title: '存储引擎',
            dataIndex: 'engine',
            key: 'engine'
        }, {
            title: '流量',
            dataIndex: 'flow',
            key: 'flow'
        }, {
            title: '消息体',
            dataIndex: 'message',
            key: 'message'
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
            title: '流程进度',
            dataIndex: 'state',
            key: 'state'
        }, {
            title: '操作状态',
            dataIndex: 'status',
            key: 'status'
        }];

        const Search = Input.Search;

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
                        {   this.props.path === 'application' ? 
                            <Button size="large" type="primary">
                                <Link to="/channel/new">申请频道</Link>
                            </Button> : ''
                        }
                    </Col>
                </Row>
                <Table columns={columns} dataSource={this.props.appList}></Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(ChannelList);
