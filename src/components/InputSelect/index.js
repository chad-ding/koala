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

        const value = this.props.value || {};
        this.state = {
            number: value.number || 1,
            unit: value.unit || ''
        };
    }
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    }
    handleNumberChange = (e) => {
        //const number = parseInt(e.target.value || 0, 10);
        const number = e.target.value;
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }
    handleUnitChange = (unit) => {
        if (!('value' in this.props)) {
            this.setState({ unit });
        }
        this.triggerChange({ unit });
    }
    triggerChange = (changedValue) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }
    render() {
        const { size } = this.props;
        const state = this.state;
        const Option = Select.Option;

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
