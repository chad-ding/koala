/**
 *@Author: chad.ding
 *@Date: 2017-06-21 18:12:28
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Modal, Select, Input } from 'antd';
import { handleModal } from './action';

class ParamsForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleSubmit() {

    }
    handleCancel() {
        let { dispatch } = this.props;
        dispatch(handleModal(false));
    }
    render() {

        let { getFieldDecorator } = this.props.form;
        let FormItem = Form.Item;

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

        return (
            <Modal title="参数选项" key={this.props.counter} visible={this.props.visible} maskClosable={false} onOk={this.handleSubmit} onCancel={this.handleCancel}>
                    <Form className="login-form">
                        <FormItem {...formItemLayout}  label="类型" hasFeedback>
                            {getFieldDecorator('type', {
                                rules: [{
                                    required: true, message: '请选择存储引擎!'
                                }],
                                initialValue: '1'
                            })(
                                <Select>
                                    <Option value="1">消费者</Option>
                                    <Option value="2">生产者</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout}  label="名称" hasFeedback>
                            {getFieldDecorator('name', {
                                rules: [
                                    {required: true, message: '请输入登录密码!'},
                                    {pattern: /^\w{6}$/, message: '请输入正确的格式!'}
                                ]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout}  label="默认值" hasFeedback>
                            {getFieldDecorator('defaultValue', {
                                rules: [
                                    {required: true, message: '请输入登录密码!'},
                                    {pattern: /^\w{6}$/, message: '请输入正确的格式!'}
                                ]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout}  label="用途" hasFeedback>
                            {getFieldDecorator('purpose', {
                                rules: [
                                    {required: true, message: '请输入登录密码!'},
                                    {pattern: /^\w{6}$/, message: '请输入正确的格式!'}
                                ]
                            })(
                                <Input type="textarea" rows={5} />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
        );
    }
};

let ParamsModal = Form.create()(ParamsForm);

function mapStateToProps(state) {
    return {
        visible: state.codeGenReducer.paramsModal.visible,
        counter: state.codeGenReducer.paramsModal.counter
    };
}

export default connect(mapStateToProps)(ParamsModal);
