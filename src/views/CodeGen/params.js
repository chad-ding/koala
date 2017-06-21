/**
 *@Author: chad.ding
 *@Date: 2017-06-21 15:48:28
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table, Tooltip } from 'antd';
import { getParamsList, paramsModalControl } from './action';
import { cutString } from '../../utils';
import ParamsModal from './ParamsModal';

class Params extends Component {
    constructor(props) {
        super(props);
        this.showParamsModal = this.showParamsModal.bind(this);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getParamsList());
    }
    showParamsModal() {
        let { dispatch } = this.props;
        dispatch(paramsModalControl(true));
    }
    render() {
        let columns = [{
            title: '参数类型',
            dataIndex: 'type',
            key: 'type'
        }, {
            title: '参数名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '参数默认值',
            dataIndex: 'defaultValue',
            key: 'defaultValue'
        }, {
            title: '参数用途',
            dataIndex: 'purpose',
            key: 'purpose',
            render: (text, record, index) => <Tooltip placement="topLeft" title={text}>{cutString(text, 20)}</Tooltip>
        }, {
            title: '操作状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record, index) => <Button type="danger">删除</Button>
        }];

        return (
            <div>
                <div className="wrapper">
                    <Button onClick={this.showParamsModal} size="large" type="primary">添加选项</Button>
                </div>
                <Table rowKey={record => record.name} columns={columns} dataSource={this.props.paramsList}></Table>
                <ParamsModal></ParamsModal>
            </div>
        );
    }
};

function mapStateToProps(state) {

    return {
        paramsList: state.codeGenReducer.paramsList
    };
}

export default connect(mapStateToProps)(Params);
