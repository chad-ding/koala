/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 14:20:54
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Input } from 'antd';
import { handleModal, addPortal } from './action';

class PortalModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }
    handleCancel() {
        let { dispatch } = this.props;
        dispatch(handleModal(false));
    }
    handleOk() {
        let form = this.props.form;
        let portal = form.getFieldsValue();
        let {dispatch} = this.props;
        dispatch(addPortal(portal));
        this.handleCancel();
    }
    render() {
        let { getFieldDecorator } = this.props.form;
        let formItemLayout = {
            labelCol: {
                xs: { span: 14 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            }
        };

        let FormItem = Form.Item;
        return (
            <Modal maskClosable={false} onOk={this.handleOk} onCancel={this.handleCancel} title="添加Portal" key={this.props.counter} visible={this.props.visible}>
                <Form>
                    <FormItem {...formItemLayout} label="名称" hasFeedback>
                        {getFieldDecorator('name', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="URL" hasFeedback>
                        {getFieldDecorator('url', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="公共账户" hasFeedback>
                        {getFieldDecorator('account', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="BO" hasFeedback>
                        {getFieldDecorator('bo', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="存储节点" hasFeedback>
                        {getFieldDecorator('node', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.envAddReducer.portalModal
    };
}

let PortalModalForm = Form.create()(PortalModal);

export default connect(mapStateToProps)(PortalModalForm);
