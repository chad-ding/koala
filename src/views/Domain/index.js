/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 11:35:00
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Table } from 'antd';
import { getDomainList } from './action';

class DomainForm extends Component {
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
                <FormItem {...formItemLayout} label="vhost" hasFeedback>
                    {getFieldDecorator('vhost', {
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
                <FormItem {...formItemLayout} label="username" hasFeedback>
                    {getFieldDecorator('username', {
                       rules: [{
                            type: 'string', message: '输入不合法!'
                        }, {
                            required: true, message: '请输入项目名称!'
                        }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [{
                            type: 'string', message: '输入不合法!'
                        }, {
                            required: true, message: '请输入项目名称!'
                        }]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">保存</Button>  
                </FormItem>
            </Form>
        );
    }
}

let FormBody = Form.create()(DomainForm);

class Domain extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getDomainList());
    }
    render() {

        let columns = [{
            title: 'Vhost',
            dataIndex: 'vhost',
            key: 'vhost'
        }, {
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        }, {
            title: '密码',
            dataIndex: 'password',
            key: 'password'
        }];

        return (
            <div>
                <FormBody></FormBody>
                <Table rowKey={record => record.vhost} columns={columns} dataSource={this.props.domainList}></Table>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        domainList: state.domainReducer.domainList
    };
}

export default connect(mapStateToProps)(Domain);
