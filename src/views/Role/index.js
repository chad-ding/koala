/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 11:35:00
 */

import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

class RoleForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let FormItem = Form.Item;
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
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="环境管理员" hasFeedback>
                    {getFieldDecorator('envAdmin', {
                        rules: [{
                            type: 'string', message: '输入不合法!',
                            pattern: /^queue.\w+/
                        }, {
                            required: true, message: '请输入频道名称!'
                        }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="资源审批员" hasFeedback>
                    {getFieldDecorator('resourceAudit', {
                        rules: [{
                            type: 'string', message: '输入不合法!',
                            pattern: /^queue.\w+/
                        }, {
                            required: true, message: '请输入频道名称!'
                        }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="系统管理员" hasFeedback>
                    {getFieldDecorator('sysAdmin', {
                        rules: [{
                            type: 'string', message: '输入不合法!',
                            pattern: /^queue.\w+/
                        }, {
                            required: true, message: '请输入频道名称!'
                        }]
                    })(
                        <Input type="textarea" rows={5} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">保存</Button>  
                </FormItem>
            </Form>
        );
    }
};


function mapStateToProps(state) {
    return {

    };
}

let Role = Form.create()(RoleForm);

export default connect(mapStateToProps)(Role);
