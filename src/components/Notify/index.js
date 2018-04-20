/**
 *@Author: chad.ding
 *@Date: 2018-04-20 11:37:04
 */

import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Modal, Input, Form } from 'antd';
import PropTypes from 'prop-types';

const mountContainer = Symbol('mountContainer');
const unmountComponent = Symbol('unmountComponent');

export default class Notify {
    static[mountContainer]() {
        const container = document.createElement('div');
        document.body.appendChild(container);
        return container;
    }
    static[unmountComponent](container) {
        unmountComponentAtNode(container);
        document.body.removeChild(container);
    }
    static confirm(options) { //onOk function is required, title label and confirmMsg are option
        const container = Notify[mountContainer]();

        const handleCancel = () => {
            Notify[unmountComponent](container);
        };

        const handleOk = (text) => {
            options.onOk(text);
            Notify[unmountComponent](container);
        };

        render(
            <Confirm {...Object.assign({}, options, {handleOk, handleCancel})}></Confirm>,
            container
        );
    }
};

class ConfirmForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }
    handleOk = async() => {

        const { confirmMsg, handleOk, form } = this.props;
        const text = this.state.text;

        let valid = true;

        await form.validateFieldsAndScroll((error, values) => {
            if (error) {
                valid = false;
            }
        });

        if (!valid) {
            return;
        }

        if (confirmMsg) {
            Modal.confirm({
                title: '确认提示',
                content: confirmMsg,
                onOk: function() {
                    handleOk(text);
                }
            });
        } else {
            handleOk(text);
        }
    }
    render() {

        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const TextArea = Input.TextArea;

        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 20
            }
        };

        const { title, label, handleCancel, maxLength } = this.props;

        return (
            <Modal title={title} visible onOk={this.handleOk} onCancel={handleCancel}>
                <Form>
                    <FormItem {...formItemLayout} label={label} hasFeedback>
                        {getFieldDecorator('audit', {
                            rules: [{
                                required: true, message: `${label}不能为空!`
                            }, {
                                whitespace: true, message: `${label}不能为空!`
                            }],
                            initialValue: ''
                        })(
                            <TextArea placeholder={`请输入${label}`} onChange={evt => this.setState({text: evt.target.value})} maxLength={maxLength} rows={6}></TextArea>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
};

const Confirm = Form.create()(ConfirmForm);

Confirm.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    confirmMsg: PropTypes.string,
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func
};

Confirm.defaultProps = {
    title: '确认提示',
    label: '理由',
    maxLength: 200
};