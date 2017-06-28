/**
 *@Author: chad.ding
 *@Date: 2017-06-22 16:24:54
 */

import React, { Component } from 'react';
import { Input, Checkbox } from 'antd';

import './style.less';

export default class CheckInput extends Component {
	constructor(props){
		super(props);

		let value = this.props.value || {};
        this.state = {
            checked: value.checked || false,
            text: value.text || ''
        };

		this.handleCheckChange = this.handleCheckChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            let value = nextProps.value;
            this.setState(value);
        }
    }
	handleCheckChange(evt){
		let checked = evt.target.checked;
		this.setState({ checked });
	}
	handleInputChange(evt){
		let text = evt.target.value;
		this.setState({ text });
	}
	render(){

		let state = this.state;

		return (
			<span>
				<Checkbox size="large" onChange={this.handleCheckChange} checked={state.checked}></Checkbox>
				<Input size="large" type="text" onChange={this.handleInputChange} value={state.text} className="input-width"></Input>
			</span>
		);
	}
};