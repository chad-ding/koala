/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-17 17:03:22
 */

import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import './index.less';

export default class EnvAdd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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

        //const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="环境名称" hasFeedback>
                    <Input />
                </FormItem>
                <FormItem {...formItemLayout} label="BO" hasFeedback>
                    <Input />
                </FormItem>
                <FormItem {...formItemLayout} label="Cfgcenter API" hasFeedback>
                    <Input />
                </FormItem>
                <FormItem {...formItemLayout} label="VDP API" hasFeedback>
                    <Input />
                </FormItem>
                <FormItem {...formItemLayout} label="Hosts" hasFeedback>
                    <Input type="textarea" rows="10"/>
                </FormItem>
                <FormItem {...formItemLayout} label="所有人可见" hasFeedback>
                    <Checkbox></Checkbox>
                </FormItem>
                <FormItem {...formItemLayout} label="开放申请" hasFeedback>
                    <Checkbox></Checkbox>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="button" size="large">保存</Button>&nbsp;&nbsp;&nbsp;
                    <Button type="default" htmlType="button" size="large">取消</Button>
                </FormItem>
            </Form>
        );
    }
};
