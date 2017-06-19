/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 11:35:00
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';

class DataDicForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;

        const formItemLayout = {
            labelCol: {
                xs: { span: 14 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            }
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 14,
                    offset: 6
                }
            }
        };

        return (
            <div>
                <Form className="login-form">
                    <FormItem {...formItemLayout} label="线上用途">
                        {getFieldDecorator('onlinePurpose', {
                            rules: [
                                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                            ]
                        })(
                            <Input rows={5} type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="线下用途">
                        {getFieldDecorator('offlinePurpose', {
                            rules: [
                                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                            ]
                        })(
                            <Input rows={5} type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="存储引擎">
                        {getFieldDecorator('engine', {
                            rules: [
                                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                            ]
                        })(
                            <Input rows={5} type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="开发语言">
                        {getFieldDecorator('language', {
                            rules: [
                                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                            ]
                        })(
                            <Input rows={5} type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="消费形态">
                        {getFieldDecorator('consumeForm', {
                            rules: [
                                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                            ]
                        })(
                            <Input rows={5} type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">保存</Button>  
                    </FormItem>
                </Form>
            </div>
        );
    }
};

const DataDic = Form.create()(DataDicForm);

function mapStateToProps(state) {
    return {

    };
};

export default connect(mapStateToProps)(DataDic);
