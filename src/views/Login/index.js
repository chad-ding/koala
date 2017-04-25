/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-25 22:54:03
 */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import {connect} from 'react-redux';

export default class Login extends Component {
    construct(props) {
        super(props);
    }
    render() {
        return (
            <div>
				<Modal title="登录" visible={this.props.visible} onOk={this.handleOk} confirmLoading={this.state.confirmLoading} onCancel={this.handleCancel}>
          			<p>{this.state.ModalText}</p>
        		</Modal>
			</div>
        );
    }
};

function mapStateToProps(state){
	return {
		showModal: state.longinReducer.showMOdal
	};
}

connect(mapStateToProps)(Login);