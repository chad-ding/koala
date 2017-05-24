/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:22:05
 */

import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Select, Radio, InputNumber, Breadcrumb, Icon, Table } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ChannelModal from './ChannelModal';
import { handleModal } from './action';

class Queue extends Component {
    constructor(props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
    }
    handleModal() {
        const { dispatch } = this.props;
        dispatch(handleModal(true));
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

        const columns = [{
            title: '频道名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '路由',
            dataIndex: 'url',
            key: 'url'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => (
                <span>
                    <a href="javascript:;" onClick={() => this.delPortal(index)}>删除</a>
                </span>
            )
        }];

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
                        申请队列
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="队列名称" hasFeedback>
                        {getFieldDecorator('channelName', {
                            rules: [{
                                type: 'string', message: '输入不合法!'
                            }, {
                                required: true, message: '请输入环境名称!'
                            }]
                        })(
                            <Input placeholder="必须以queue开头，包含数字，字母，'_'和'.'，如queue.cfg_2d" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="组内广播" hasFeedback>
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
                    <FormItem {...formItemLayout} label="应用规划数" hasFeedback>
                        {getFieldDecorator('email', {
                            valuePropName: 'checked'
                        })(
                            <InputNumber min={1} max={10} defaultValue={3} />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="订阅频道">
                        <Button onClick={this.handleModal} type="primary" htmlType="button" size="large" style={{float: 'right'}}>添加订阅</Button>
                    </FormItem>
                    <FormItem {...formItemLayout} colon={false} label=" ">
                        <Table size="small" rowKey="name" columns={columns} dataSource={this.props.portalList}></Table>
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
                <ChannelModal></ChannelModal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.ChannelFormReducer
    };
}

const QueueForm = Form.create()(Queue);

export default connect(mapStateToProps)(QueueForm);
