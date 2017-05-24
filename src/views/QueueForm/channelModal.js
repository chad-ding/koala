/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-24 15:28:46
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Button, Select } from 'antd';
import { handleModal, addPortal } from './action';

class ChannelModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }
    handleCancel() {
        const { dispatch } = this.props;
        dispatch(handleModal(false));
    }
    handleOk() {
        const form = this.props.form;
        const portal = form.getFieldsValue();
        const {dispatch} = this.props;
        dispatch(addPortal(portal));
        this.handleCancel();
    }
    render() {

        return (
            <Modal maskClosable={false} onOk={this.handleOk} onCancel={this.handleCancel} title="订阅频道" key={this.props.counter} visible={this.props.visible}>
                ddddddddddddd
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.queueFormReducer.channelModal
    };
}

export default connect(mapStateToProps)(ChannelModal);
