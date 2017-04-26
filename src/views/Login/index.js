/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-25 22:54:03
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';
import {SHOW_LOGIN_MODAL} from '../../consts/action';
import {login} from './action';
import md5 from 'js-md5';

const FormItem = Form.Item;

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCancel(){
        const {dispatch} = this.props;
        dispatch({type: SHOW_LOGIN_MODAL, showLoginModal: false})
    }
    handleSubmit(){
        console.log(this.props.form.getFieldValue('userName'));
        const {dispatch} = this.props;
        let params = {
            loginName: this.props.form.getFieldValue('userName'),
            loginPassword: md5(this.props.form.getFieldValue('password'))
        };

        dispatch(login(params));
        this.handleCancel();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
				<Modal title="登录" visible={this.props.visible} onOk={this.handleSubmit} confirmLoading={this.props.confirmLoading} onCancel={this.handleCancel}>
          			<Form className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入登录账号!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="登录账号" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入登录密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="登录密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
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

function mapStateToProps(state){
    return {
        visible: state.homeReducer.showLoginModal
    };
}

export default connect(mapStateToProps)(Login);