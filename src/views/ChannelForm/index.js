/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:22:05
 */

import React, { Component } from 'react';
import { Form, Input, Switch, Button, Checkbox, Select, Radio, Slider, InputNumber, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import InputSelect from '../../components/InputSelect';

import './style.less';

class Channel extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkFlow = this.checkFlow.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    checkFlow(rule, value, callback){
        if (value.number > 0) {
            callback();
            return;
        }
        callback('总流量预估必须大于0!');
    }
    render() {

        let FormItem = Form.Item;
        let { getFieldDecorator } = this.props.form;
        let { Option, OptGroup } = Select;
        let RadioGroup = Radio.Group;

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

        let marks = {
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

        let unitMap = [
            { value: '1', text: 'QPS(请求/秒)' },
            { value: '2', text: 'QPM(请求/分)' },
            { value: '3', text: 'QPH(请求/小时)' },
            { value: '4', text: 'QPD(请求/天)' }
        ];

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
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
                                type: 'string', message: '输入不合法!',
                                pattern: /^channel.\w+/
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
                                required: true, message: '请选择是否分片!'
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
                                required: true, message: '请输入项目名称名称!'
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
                        {getFieldDecorator('purpose', {
                            rules: [{
                                required: true, message: '请选择用途!'
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
                        {getFieldDecorator('liveTime', {
                            rules: [{
                                required: true, message: '请选择存活时间!'
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
                    <FormItem {...formItemLayout} label="消息体预估" hasFeedback>
                        {getFieldDecorator('message', {
                            initialValue: [1, 500]
                        })( 
                           <Slider marks={marks} range min={1} max={900} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="应用规划数" hasFeedback>
                        {getFieldDecorator('program', {
                            rules: [{
                                type: 'number', message: '只能输入数字!'
                            },{
                                required: true, message: '请输入应用规划数!'
                            }],
                            initialValue: 30
                        })(
                            <InputNumber min={1} max={10} className="full-width" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="总流量预估" hasFeedback>
                        {getFieldDecorator('flow', {
                            rules: [{
                                required: true, message: '请输入总流量预估'
                            },{
                                validator: this.checkFlow
                            }],
                            initialValue: { number: 1, unit: '1' }
                        })(
                            <InputSelect unitMap={unitMap}></InputSelect>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="用途说明" hasFeedback>
                        {getFieldDecorator('useage', {
                            rules: [{
                                required: true, message: '请输入用途说明'
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
}

function mapStateToProps(state) {
    return {
        ...state.ChannelFormReducer
    };
}

let ChannelForm = Form.create()(Channel);

export default connect(mapStateToProps)(ChannelForm);
