/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:22:05
 */

import React, { Component } from 'react';
import { Form, Input, Button, Switch, Checkbox, Select, InputNumber, Breadcrumb, Icon, Table } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ChannelModal from './ChannelModal';
import { handleModal, subscribe, unsubscribe } from './action';

class Queue extends Component {
    constructor(props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
    }
    handleModal() {
        let { dispatch } = this.props;
        dispatch(handleModal(true));
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    subscribe(channel) {
        let { dispatch } = this.props;
        dispatch(subscribe(channel));
    }
    unsubscribe(channel) {
        let { dispatch } = this.props;
        dispatch(unsubscribe(channel));
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

        let columns = [{
            title: '频道名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '路由',
            key: 'route',
            render: () => <Input></Input>
        }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => (
                <span>
                    <a href="javascript:;" onClick={() => this.unsubscribe(record)}>删除</a>
                </span>
            )
        }];

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
                        申请队列
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="队列名称" hasFeedback>
                        {getFieldDecorator('queueName', {
                            rules: [{
                                type: 'string', message: '输入不合法!',
                                pattern: /^queue.\w+/
                            }, {
                                required: true, message: '请输入频道名称!'
                            }]
                        })(
                            <Input placeholder="必须以queue开头，包含数字，字母，'_'和'.'，如channel.cfg_2d" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="组内广播" hasFeedback>
                        {getFieldDecorator('broadcast', {
                            rules: [{
                                required: true, message: '请选择是否组内广播!'
                            }],
                            valuePropName: 'checked',
                            initialValue: false
                        })(
                            <Switch checkedChildren={'是'} unCheckedChildren={'否'} />
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
                                required: true, message: '请输入App Id!'
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
                    <FormItem {...formItemLayout} label="订阅频道">
                        <Button onClick={this.handleModal} type="primary" htmlType="button" size="large" className="pull-right">添加订阅</Button>
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false} label=" ">
                        <Table pagination={false} size="small" rowKey="name" columns={columns} dataSource={this.props.subscribedChannel}></Table>
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
                <ChannelModal onSubscribe={this.subscribe}></ChannelModal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        subscribedChannel: state.queueFormReducer.subscribedChannel
    };
}

let QueueForm = Form.create()(Queue);

export default connect(mapStateToProps)(QueueForm);
