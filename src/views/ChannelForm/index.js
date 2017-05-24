/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:22:05
 */

import React, { Component } from 'react';
import { Form, Input, Switch, Button, Checkbox, Select, Radio, Slider, InputNumber, Breadcrumb, Icon, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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

        const marks = {
            1: {
                style: {
                  color: '#f50'
                },
                label: <strong>1KB</strong>
            },
            900: {
                style: {
                  color: '#f50'
                },
                label: <strong>900KB</strong>
            }
        };

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="javascript:;">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="javascript:;">
                        <span>
                            <Link to="/application">接入申请</Link>
                        </span>
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
                                required: true, message: '请输入频道名称!'
                            }]
                        })(
                            <Input placeholder="必须以channel开头，包含数字，字母，'_'和'.'，如channel.cfg_2d" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="存储引擎" hasFeedback>
                        {getFieldDecorator('cluster', {
                            rules: [{
                                required: true, message: '请选择存储引擎!'
                            }],
                            initialValue: '消息堆积(Kafka)'
                        })(
                            <Select>
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
                            }],
                            initialValue: 'direct'
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
                                required: true, message: '请选择是否分片'
                            }],
                            valuePropName: 'checked',
                            initialValue: false
                        })(
                            <Switch checkedChildren={'是'} unCheckedChildren={'否'} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="项目名称" hasFeedback>
                        {getFieldDecorator('project', {
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
                        {getFieldDecorator('appId', {
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
                        {getFieldDecorator('purpose', {
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
                        {getFieldDecorator('liveTime', {
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
                    <FormItem {...formItemLayout} label="开发语言" hasFeedback>
                        {getFieldDecorator('language', {
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
                        {getFieldDecorator('message', {
                            initialValue: [1, 500]
                        })( 
                           <Slider marks={marks} range min={1} max={900} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="应用规划数" hasFeedback>
                        {getFieldDecorator('program', {
                            initialValue: 30
                        })(
                            <InputNumber min={1} max={10} style={{width: '100%'}} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="总流量预估" hasFeedback>
                        
                            <Row>
                                <Col span={20}>
                                    {getFieldDecorator('flow', {
                                        initialValue: 100
                                    })(
                                        <InputNumber min={1} style={{width: '95%'}} />
                                    )}
                                </Col>
                                <Col span={4}>
                                    {getFieldDecorator('unit', {
                                        rules: [
                                            {required: true, message: '请输入环境名称!'}
                                        ],
                                        initialValue: '4'
                                    })(
                                        <Select defaultValue="3">
                                            <Option value="1">QPS(请求/秒)</Option>
                                            <Option value="2">QPM(请求/分)</Option>
                                            <Option value="3">QPH(请求/小时)</Option>
                                            <Option value="4">QPD(请求/天)</Option>
                                        </Select>
                                    )}
                                </Col>
                            </Row> 
                        
                    </FormItem>
                    <FormItem {...formItemLayout} label="用途说明" hasFeedback>
                        {getFieldDecorator('useage', {
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
