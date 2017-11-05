/**
 *@Author: chad.ding
 *@Date: 2017-06-22 16:24:54
 */

import React, { Component } from 'react';
import { Input, Checkbox } from 'antd';

import './style.less';

export default class CheckInput extends Component {
    constructor(props) {
        super(props);

        let value = this.props.value || {};
        this.state = {
            checked: value.checked || false,
            text: value.text || ''
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            let value = nextProps.value;
            this.setState(value);
        }
    }
    render() {
        return (
            <span>
				<Checkbox onChange={evt => this.setState({checked: evt.target.checked})} size="large" checked={this.state.checked}></Checkbox>
				<Input onChange={evt => this.setState({text: evt.target.value})} size="large" type="text" value={this.state.text} className="input-width"></Input>
			</span>
        );
    }
};
