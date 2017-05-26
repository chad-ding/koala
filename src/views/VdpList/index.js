
/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-24 10:22:29
 */

import React, { Component } from 'react';
import { Row, Col, Button, Input, Table } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class VdpList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const columns = [{
            title: '队列名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>
        }, {
            title: '订阅目标',
            dataIndex: 'project',
            key: 'project'
        }, {
            title: '消费形态',
            dataIndex: 'engine',
            key: 'engine'
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
            title: '流程进度',
            dataIndex: 'state',
            key: 'state'
        }, {
            title: '最后审批人',
            dataIndex: 'language',
            key: 'language'
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
                        {   
                            
                            this.props.path === 'approval' ? '' : 
                            <Button size="large" type="primary">
                                <Link to="/vdp/new">申请数据表</Link>
                            </Button>
                        }
                    </Col>
                </Row>
                <br/>
                <Table columns={columns} dataSource={this.props.appList}></Table>
            </div>
        );
    }
}

function mapStateToProps() {
    return {

    };
}

export default connect(mapStateToProps)(VdpList);
