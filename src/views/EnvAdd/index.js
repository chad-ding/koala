/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-17 17:03:22
 */

import React, { Component } from 'react';
import { Form, Input, Checkbox, Button, Table } from 'antd';
import { connect } from 'react-redux';
import { handleModal } from './action';
import PortalModalForm from './portalModal';

import './index.less';

class EnvAdd extends Component {
    constructor(props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
    }
    handleModal(){
        const {dispatch} = this.props;
        dispatch(handleModal(true));
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
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

        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;

        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'URL',
            dataIndex: 'url',
            key: 'url'
        }, {
            title: '公共账户',
            dataIndex: 'account',
            key: 'account'
        }, {
            title: 'BO',
            dataIndex: 'bo',
            key: 'bo'
        }, {
            title: '存储节点',
            dataIndex: 'node',
            key: 'node'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">删除</a>
                </span>
            )
        }];

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="环境名称" hasFeedback>
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
                <FormItem {...formItemLayout} label="BO" hasFeedback>
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
                <FormItem {...formItemLayout} label="Cfgcenter API" hasFeedback>
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
                <FormItem {...formItemLayout} label="VDP API" hasFeedback>
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
                <FormItem {...formItemLayout} label="Hosts" hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'string', message: '输入不合法!'
                        }, {
                            required: true, message: '请输入环境名称!'
                        }]
                    })(
                        <Input type="textarea" rows="10"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="所有人可见" hasFeedback>
                    {getFieldDecorator('email', {
                        valuePropName: 'checked'
                    })(
                        <Checkbox></Checkbox>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="开放申请" hasFeedback>
                    {getFieldDecorator('email', {
                        valuePropName: 'checked'
                    })(
                        <Checkbox></Checkbox>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Portals">
                    <Button onClick={this.handleModal} type="primary" htmlType="button" size="large" style={{float: 'right'}}>添加</Button>
                </FormItem>
                <FormItem {...formItemLayout} colon={false} label=" ">
                    <Table columns={columns} dataSource={this.props.portalList}></Table>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="default" htmlType="button" size="large">取消</Button>&nbsp;&nbsp;&nbsp;
                    <Button type="primary" htmlType="button" size="large">保存</Button>  
                </FormItem>
                <PortalModalForm></PortalModalForm>
            </Form>
        );
    }
};

const EnvForm = Form.create()(EnvAdd);

function mapStateToProps(state) {
    return {
        ...state.envAddReducer
    };
}

export default connect(mapStateToProps)(EnvForm);
