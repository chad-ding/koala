/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-11-04 21:08:47
 */

import React, { Component } from 'react';
import { InputNumber } from 'antd';

import './style.less';

export default class RangeInput extends Component {
	constructor(props){
		super(props);

		let value = this.props.value || {min: 0, max: 1};
        this.state = {
            min: value.min,
            max: value.max
        };

        this.handleMaxChange = this.handleMaxChange.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.triggerChange = this.triggerChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            let value = nextProps.value;
            this.setState(value);
        }
    }
    handleMaxChange(max){
    	let maxValue = {max};
    	this.setState(maxValue);

    	this.triggerChange(maxValue);
    }
    handleMinChange(min){

    	let minValue = {min};

    	this.setState(minValue);
    	this.triggerChange(minValue);
    }
    triggerChange(changeValue){
    	const onChange = this.props.onChange;

    	if(onChange){
    		onChange(Object.assign({}, this.state, changeValue));
    	}
    }
	render(){

		return (
			<span>
				<InputNumber onChange={this.handleMinChange} min={0} value={this.state.min} className="range-input"></InputNumber>
				<span className="input-separator">-</span>
				<InputNumber onChange={this.handleMaxChange} min={1} value={this.state.max} className="range-input"></InputNumber>
				<span>({this.props.unit})</span>
			</span>
		);
	}
};