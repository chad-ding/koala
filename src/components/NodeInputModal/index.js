/**
 *@Author: chad.ding
 *@Date: 2018-04-20 11:37:12
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal, InputNumber } from 'antd';
import { ipCheck, isNull } from 'commons/utils';

@Form.create()
export default class NodeInputModal extends Component {
    constructor(props) {
        super(props);
    }
    handleOk = async() => {
        const { form, handleOk, multipleEnable } = this.props;

        let invalid = false;

        await form.validateFieldsAndScroll((error, values) => {
            if (error) {
                invalid = true;
            }
        });

        if (invalid) {
            return;
        }

        let { ipAddr, port } = form.getFieldsValue();
        let nodeList = null;
        if (multipleEnable) {
            let ipAddrSet = new Set(ipAddr.split(';'));
            nodeList = Array.from(ipAddrSet).map(item => ({ ipAddr: item, port: port }));
        } else {
            nodeList = [{
                ipAddr,
                port
            }];
        }

        handleOk(nodeList);
    }
    render() {

        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        const { initialIp, initialPort, multipleEnable } = this.props;

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

        return (
            <Modal onOk={this.handleOk} key={this.props.visible} onCancel={this.props.handleCancel} title="新增节点" visible={this.props.visible} maskClosable={false}>
                <Form>
                    <FormItem {...formItemLayout} label="主机IP">
                        {getFieldDecorator('ipAddr', {
                            rules: [{
                                required: true, message: '主机IP不能为空!'
                            }, {
                                whitespace: true, message: '主机IP不能为空!'
                            }, {
                                validator: (rule, value, callback) => {
                                    if(isNull(value)){
                                        callback();
                                        return;  
                                    }

                                    let invalid = false;
                                    if(multipleEnable){
                                        let ipList = value.trim().split(';');
                                        invalid = ipList.some( item => !ipCheck(item));
                                    }else{
                                        invalid = !ipCheck(value.trim());
                                    }
                                    if(!invalid){
                                        callback();
                                        return;
                                    }
                                    callback('请输入正确的IP!');
                                }
                            }],
                            initialValue: initialIp
                        })(
                            <Input placeholder={multipleEnable ? '请输入主机IP,多个IP请以分号（;）进行分隔' : '请输入主机IP'}></Input>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="端口">
                        {getFieldDecorator('port', {
                            rules: [{
                                required: true, message: '端口号不能为空!'
                            }],
                            initialValue: initialPort
                        })(
                            <InputNumber min={1} step={1} precision={0} placeholder="请输入主机端口号" className="full-width"></InputNumber>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
};

NodeInputModal.propTypes = {
    multipleEnable: PropTypes.bool.isRequired,
    initialIp: PropTypes.string,
    initialPort: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired
};

NodeInputModal.defaultProps = {
    multipleEnable: false,
    initialIp: '',
    initialPort: '',
    visible: false
};