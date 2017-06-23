/**
 *@Author: chad.ding
 *@Date: 2017-06-23 19:16:15
 */

import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { getClusterList } from './action';

class Cluster extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getClusterList());
    }
    render() {

        let columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Kafka',
            dataIndex: 'kafka',
            key: 'kafka'
        }, {
            title: 'Zookeeper',
            dataIndex: 'zookeeper',
            key: 'zookeeper'
        }, {
            title: '频道',
            dataIndex: 'channel',
            key: 'channel'
        }, {
            title: '队列',
            dataIndex: 'queue',
            key: 'queue'
        }, {
            title: '健康',
            dataIndex: 'health',
            key: 'health'
        }, {
            title: '可用节点',
            dataIndex: 'aviableNode',
            key: 'aviableNode'
        }];

        return (
            <Table rowKey={record => record.name} dataSource={this.props.clusterList} columns={columns}></Table>
        );
    }
}

function mapStateToProps(state) {
    return {
        clusterList: state.envItemReducer.clusterList
    };
}

export default connect(mapStateToProps)(Cluster);
