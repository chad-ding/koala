/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 11:35:00
 */

import React, { Component } from 'react';
import { Form, Input, Button, Icon, Tooltip } from 'antd';
import { connect } from 'react-redux';
import CheckInput from '../../components/CheckInput';
import VariableModal from './variableModal';
import { handleModal } from './action';

import './style.less';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }
    componentDidMount() {
        console.log('note module did mount...');
    }
    componentWillUnmount() {
        console.log('note module will unmount...');
    }
    showModal() {
        let { dispatch } = this.props;
        dispatch(handleModal(true));
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
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h3>
                        <Icon type="setting"></Icon>
                        &nbsp;基本信息&nbsp;&nbsp;
                        <Tooltip placement="topRight" title="点击查看变量详情">
                            <Icon onClick={this.showModal} className="question-icon" type="question-circle-o"></Icon>
                        </Tooltip>
                    </h3>
                    <FormItem {...formItemLayout} label="邮件主题" hasFeedback>
                        {getFieldDecorator('title', {
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
                    <FormItem {...formItemLayout} label="邮件内容" hasFeedback>
                        {getFieldDecorator('content', {
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
                    <h3><Icon type="clock-circle-o"></Icon>&nbsp;邮件触发时机</h3>
                    <FormItem {...formItemLayout} label="提交申请" hasFeedback>
                        {getFieldDecorator('apply', {
                            rules: [{
                                required: true, message: '请输入总流量预估'
                            },{
                                validator: this.checkFlow
                            }],
                            initialValue: { checked: true, text: '' }
                        })(
                            <CheckInput></CheckInput>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="审批通过" hasFeedback>
                        {getFieldDecorator('pass', {
                            rules: [{
                                required: true, message: '请输入总流量预估'
                            },{
                                validator: this.checkFlow
                            }],
                            initialValue: { checked: true, text: '200KB' }
                        })(
                            <CheckInput></CheckInput>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="审批拒绝" hasFeedback>
                        {getFieldDecorator('reject', {
                            rules: [{
                                required: true, message: '请输入总流量预估'
                            },{
                                validator: this.checkFlow
                            }],
                            initialValue: { checked: false, text: '' }
                        })(
                            <CheckInput></CheckInput>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="上线" hasFeedback>
                        {getFieldDecorator('launch', {
                            rules: [{
                                required: true, message: '请输入总流量预估'
                            },{
                                validator: this.checkFlow
                            }],
                            initialValue: { checked: true, text: '' }
                        })(
                            <CheckInput></CheckInput>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="过期" hasFeedback>
                        {getFieldDecorator('expired', {
                            rules: [{
                                required: true, message: '请输入总流量预估'
                            },{
                                validator: this.checkFlow
                            }],
                            initialValue: { checked: true, text: '' }
                        })(
                            <CheckInput></CheckInput>
                        )}
                    </FormItem>
                    <h3><Icon type="mail"></Icon>&nbsp;SMTP</h3>
                    <FormItem {...formItemLayout} label="邮件服务器" hasFeedback>
                        {getFieldDecorator('server', {
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
                    <FormItem {...formItemLayout} label="用户名" hasFeedback>
                        {getFieldDecorator('username', {
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
                    <FormItem {...formItemLayout} label="密码" hasFeedback>
                        {getFieldDecorator('password', {
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
                    <FormItem {...formItemLayout} label="邮箱" hasFeedback>
                        {getFieldDecorator('email', {
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
                    <FormItem {...formItemLayout} label="昵称" hasFeedback>
                        {getFieldDecorator('name', {
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
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">保存</Button>  
                    </FormItem>
                </Form>
                <VariableModal></VariableModal>
            </div>
        );
    }
};

let Note = Form.create()(NoteForm);

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Note);
