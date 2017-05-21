/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-25 22:54:03
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Icon, Input, Checkbox } from 'antd';
import RandomCode from '../../components/RandomCode';
import { SHOW_LOGIN_MODAL } from '../../consts/action';
import { login } from './action';
import md5 from 'js-md5';

const FormItem = Form.Item;

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCancel() {
        const { dispatch } = this.props;
        dispatch({ type: SHOW_LOGIN_MODAL, visible: false });
    }
    handleSubmit() {

        this.props.form.validateFields((error, values) => {
            if (error) {
                return;
            }
        });

        let params = {
            loginName: this.props.form.getFieldValue('userName'),
            loginPassword: md5(this.props.form.getFieldValue('password'))
        };

        const { dispatch } = this.props;

        dispatch(login(params));
        this.handleCancel();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Modal title="登录" key={this.props.counter} visible={this.props.visible} maskClosable={false} onOk={this.handleSubmit} onCancel={this.handleCancel}>
                    <Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [
                                    {required: true, message: '请输入登录账号!'},
                                    {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式!'}    
                                ]
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="email" placeholder="登录账号" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                    {required: true, message: '请输入登录密码!'},
                                    {pattern: /^\w{6}$/, message: '请输入正确的格式!'}
                                ]
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="登录密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <RandomCode ref={(randomCode) => {this.randomCode = randomCode;}}></RandomCode>
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>记住账号</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
};

const Login = Form.create()(LoginModal);

function mapStateToProps(state) {
    return {
        ...state.homeReducer.loginModal
    };
}

export default connect(mapStateToProps)(Login);
