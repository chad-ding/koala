/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:22:05
 */

import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Select, Radio, Slider, InputNumber, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';

class Channel extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        const { Option, OptGroup } = Select;
        const RadioGroup = Radio.Group;

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
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>项目接入</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        申请频道
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="频道名称" hasFeedback>
                        {getFieldDecorator('channelName', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="存储引擎" hasFeedback>
                        {getFieldDecorator('cluster', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Select defaultValue="消息堆积(Kafka)">
                                <Option value="消息堆积(Kafka)">消息堆积(Kafka)</Option>
                                <Option value="任务事件(RabbitMQ)">任务事件(RabbitMQ)</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="路由策略" hasFeedback>
                        {getFieldDecorator('mode', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <RadioGroup>
                                <Radio value="direct">direct</Radio>
                                <Radio value="topic">topic</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="是否分片" hasFeedback>
                        {getFieldDecorator('sharding', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <RadioGroup>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="项目名称" hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="App ID" hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="用途" hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Select defaultValue="1">
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
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Select defaultValue="1">
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
                    <FormItem {...formItemLayout} label="开发语言" hasFeedback>
                        {getFieldDecorator('email', {
                            valuePropName: 'checked',
                            rules: [{
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <div>
                                <Checkbox>Java</Checkbox>
                                <Checkbox>PHP</Checkbox>
                                <Checkbox>C++</Checkbox> 
                            </div>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="消息体预估" hasFeedback>
                        {getFieldDecorator('email', {
                            valuePropName: 'checked'
                        })(
                             <Slider range defaultValue={[20, 50]} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="应用规划数" hasFeedback>
                        {getFieldDecorator('email', {
                            valuePropName: 'checked'
                        })(
                            <InputNumber min={1} max={10} defaultValue={3} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="总流量预估" hasFeedback>
                        {getFieldDecorator('email', {
                            valuePropName: 'checked'
                        })( 
                            <div>
                                <InputNumber min={1} defaultValue={100} />
                                <Select defaultValue="1">
                                    <Option value="1">QPS(请求/秒)</Option>
                                    <Option value="2">QPM(请求/分)</Option>
                                    <Option value="3">QPH(请求/小时)</Option>
                                    <Option value="4">QPD(请求/天)</Option>
                                </Select>
                            </div> 
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="用途说明" hasFeedback>
                        {getFieldDecorator('email', {
                            valuePropName: 'checked'
                        })(
                            <Input type="textarea" rows={10}></Input>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="default" htmlType="button" size="large">取消</Button>&nbsp;&nbsp;&nbsp;
                        <Button type="primary" htmlType="button" size="large">保存</Button>  
                    </FormItem>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.ChannelFormReducer
    };
}

const ChannelForm = Form.create()(Channel);

export default connect(mapStateToProps)(ChannelForm);
