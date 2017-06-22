/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-25 10:54:27
 */

import React, { Component } from 'react';
import { Input, Select } from 'antd';

export default class InputSelect extends Component {
    constructor(props) {
        super(props);

        let value = this.props.value || {};
        this.state = {
            number: value.number || 1,
            unit: value.unit || ''
        };

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.triggerChange = this.triggerChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            let value = nextProps.value;
            this.setState(value);
        }
    }
    handleNumberChange(e) {
        //let number = parseInt(e.target.value || 0, 10);
        let number = e.target.value;
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }
    handleUnitChange(unit) {
        if (!('value' in this.props)) {
            this.setState({ unit });
        }
        this.triggerChange({ unit });
    }
    triggerChange(changedValue) {
        let onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }
    render() {
        let { size } = this.props;
        let state = this.state;
        let Option = Select.Option;

        return (
            <span>
                <Input type="text" size={size} value={state.number} onChange={this.handleNumberChange} style={{ width: '65%', marginRight: '3%' }} />
                <Select value={state.unit} size={size} style={{ width: '32%' }} onChange={this.handleUnitChange}>
                    {
                        this.props.unitMap.map(item => <Option key={item.value} value={item.value}>{item.text}</Option>)
                    }
                </Select>
            </span>
        );
    }
};
