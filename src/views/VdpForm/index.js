/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:22:05
 */

import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Select, InputNumber, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './style.less';

@connect(state => ({

}))
@Form.create()
export default class VdpForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {

        let FormItem = Form.Item;
        let { getFieldDecorator } = this.props.form;
        let { Option, OptGroup } = Select;

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
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>
                            <Link to="/application/list">接入申请</Link>
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        申请数据表
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="订阅表" hasFeedback>
                        {getFieldDecorator('tableName', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入订阅表名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="项目名称" hasFeedback>
                        {getFieldDecorator('project', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入项目名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="App ID" hasFeedback>
                        {getFieldDecorator('appId', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入App ID!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="用途" hasFeedback>
                        {getFieldDecorator('useage', {
                            rules: [{
                                required: true, message: '请输选择用途!'
                            }],
                            initialValue: '1'
                        })(
                            <Select>
                                <OptGroup label="线上">
                                    <Option value="1">数据统计</Option>
                                    <Option value="2">数据同步</Option>
                                    <Option value="3">任务处理</Option>
                                    <Option value="4">事件广播</Option>
                                </OptGroup>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="存活时间" hasFeedback>
                        {getFieldDecorator('live', {
                            rules: [{
                                required: true, message: '请输选择存活时间!'
                            }],
                            initialValue: '1'
                        })(
                            <Select>
                                <Option value="1">1天</Option>
                                <Option value="2">5天</Option>
                                <Option value="3">1周</Option>
                                <Option value="4">2周</Option>
                                <Option value="5">1月</Option>
                                <Option value="6">半年</Option>
                                <Option value="7">1年</Option>
                                <Option value="8">永久</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="消费形态" hasFeedback>
                        {getFieldDecorator('form', {
                            rules: [{
                                required: true, message: '请输选择消费形态!'
                            }],
                            initialValue: '1'
                        })(
                            <Select>
                                <Option value="1">保障并行</Option>
                                <Option value="2">保障顺序</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="开发语言" hasFeedback>
                        {getFieldDecorator('language', {
                            valuePropName: 'checked'
                        })(
                            <div>
                                <Checkbox>Java</Checkbox>
                                <Checkbox>PHP</Checkbox>
                                <Checkbox>C++</Checkbox> 
                            </div>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="应用规划数" hasFeedback>
                        {getFieldDecorator('program', {
                            rules: [
                                {type: 'number', message: '只能输入数字!'},
                                {required: true, message: '请输入应用规划数!'}
                            ],
                            initialValue: 30
                        })(
                            <InputNumber min={1} max={10} className="full-width" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="用途说明" hasFeedback>
                        {getFieldDecorator('purpose', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            },{
                                required: true, message: '请输选择消费形态!'
                            }]
                        })(
                            <Input type="textarea" rows={10}></Input>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Link to="/application/list">
                            <Button type="default" htmlType="button" size="large">取消</Button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Button type="primary" htmlType="submit" size="large">保存</Button>  
                    </FormItem>
                </Form>
            </div>
        );
    }
};