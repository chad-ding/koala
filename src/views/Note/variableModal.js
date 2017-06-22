/**
 *@Author: chad.ding
 *@Date: 2017-06-22 17:13:34
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Table } from 'antd';
import { VARIABLE } from '../../consts/metadata';
import { handleModal } from './action';

class VariableModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleCancel() {
        let { dispatch } = this.props;
        dispatch(handleModal(false));
    }
    render() {

        let columns = [{
            title: '变量',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '说明',
            dataIndex: 'desc',
            key: 'desc'
        }];

        return (
            <Modal title="模板变量" visible={this.props.visible} maskClosable={false} onCancel={this.handleCancel} footer={null}>
				<Table rowKey={record => record.name} columns={columns} dataSource={VARIABLE}></Table>
			</Modal>
        );
    }
};

function mapStateToProps(state) {
    return {
        visible: state.noteReducer.variableModal.visible
    };
}

export default connect(mapStateToProps)(VariableModal);
