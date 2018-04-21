/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 19:29:05
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';

@connect(state => ({

}))
@Form.create()
export default class BaseInfoForm extends Component {
    constructor(props) {
        super(props);
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

        let tailFormItemLayout = {
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
                    <FormItem {...formItemLayout} label="流程顺序">
                        {getFieldDecorator('userName', {
                            rules: [
                                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                            ]
                        })(
                            <Input rows={5} type="textarea"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="登录首页">
                        {getFieldDecorator('homePage', {
                            rules: [
                                {pattern: /^\w{6}$/, message: '请输入正确的格式!'}
                            ]
                        })(
                            <Input type="text" />
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