/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-24 15:28:46
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Table, Input, Select, Button, Form } from 'antd';
import { handleModal, getSubscribeList } from './action';

class Filter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 12 }
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 12 }
            }
        };

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="集群">
                    {getFieldDecorator('cluster', {
                        initialValue: '1'
                    })(
                        <Select>
                            <Option value="1">数据统计</Option>
                            <Option value="2">数据同步</Option>
                            <Option value="3">任务处理</Option>
                            <Option value="4">事件广播</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="关键字">
                    {getFieldDecorator('keyword', {
                        rules: [{
                            type: 'string', message: '只能输入字符'
                        }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Button>搜索</Button>
                </FormItem>
            </Form>
        );
    }
}

const FilterForm = Form.create()(Filter);

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
    componentWillReceiveProps(nextProps){
        const { dispatch } = this.props;
        if(nextProps.channelModal.counter !== this.props.channelModal.counter && nextProps.channelModal.visible){
           dispatch(getSubscribeList()); 
        }
    }
    handleOk() {
        this.handleCancel();
    }
    render() {
        const columns = [{
            title: '频道名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '已有订阅数',
            dataIndex: 'subscribeNum',
            key: 'subscribeNum'
        }, {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc'
        }, {
            title: '操作或状态',
            dataIndex: 'status',
            key: 'status'
        }];

        return (
            <Modal width={800} maskClosable={false} onOk={this.handleOk} onCancel={this.handleCancel} title="订阅频道" key={this.props.channelModal.counter} visible={this.props.channelModal.visible}>
                <FilterForm></FilterForm>
                <br/>
                <Table columns={columns} dataSource={this.props.subscribeList}></Table>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        channelModal: state.queueFormReducer.channelModal,
        subscribeList: state.queueFormReducer.subscribeList
    };
}

export default connect(mapStateToProps)(ChannelModal);
