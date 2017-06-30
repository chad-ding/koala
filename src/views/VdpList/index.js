
/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-24 10:22:29
 */

import React, { Component } from 'react';
import { Row, Col, Button, Input, Table } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getVdpList } from './action';
import FlowStep from '../../components/FlowStep';

class VdpList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        let { dispatch } = this.props;
        dispatch(getVdpList());
    }
    render() {
        let { path } = this.props;

        let columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            render: (text, record, index) => <Link to={`/${path}/vdp/${record.id}`}>{text}</Link>
        }, {
            title: '项目',
            dataIndex: 'project',
            key: 'project'
        }, {
            title: 'BO',
            dataIndex: 'bo',
            key: 'bo'
        }, {
            title: '部门',
            dataIndex: 'department',
            key: 'department'
        }, {
            title: '用途',
            dataIndex: 'purpose',
            key: 'purpose'
        }, {
            title: '申请',
            dataIndex: 'apply',
            key: 'apply'
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
            dataIndex: 'status',
            key: 'status',
            render: (text, record, index) => <FlowStep step={record.step} status={record.status}></FlowStep>
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
                            this.props.path === 'approval' ? '' : <Button size="large" type="primary"><Link to="/vdp/new">申请数据表</Link></Button>
                        }
                    </Col>
                </Row>
                <br/>
                <Table rowKey={record => record.id} columns={columns} dataSource={this.props.vdpList}></Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        vdpList: state.vdpListReducer.vdpList
    };
}

export default connect(mapStateToProps)(VdpList);
