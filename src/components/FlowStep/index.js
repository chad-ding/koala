/**
 *@Author: chad.ding
 *@Date: 2017-06-30 15:02:14
 */

import React, { Component } from 'react';
import { Tooltip, Icon } from 'antd';
import PropTypes from 'prop-types';

import './style.less';

export default class FlowStep extends Component {
    constructor(props) {
        super(props);
        this.stepView = this.stepView.bind(this);
    }
    stepView(iconStep) {
        let statusMap = [{
            type: 'meh',
            style: 'step-icon step-standby'
        }, {
            type: 'meh',
            style: 'step-icon step-processing'
        }, {
            type: 'smile',
            style: 'step-icon step-complete'
        }, {
            type: 'frown',
            style: 'step-icon step-reject'
        }];

        let { step, status } = this.props;
        if (iconStep < step) {
            return <Icon className="step-icon step-complete" type="smile"></Icon>;
        } else if (iconStep === step) {
            return <Icon className={statusMap[status].style} type={statusMap[status].type}></Icon>;
        } else {
            return <Icon className="step-icon step-standby" type="meh"></Icon>;
        }
    }
    render() {

        return (
            <div>
                <Tooltip placement="top" title="QA">
                    {this.stepView(1)}
                </Tooltip>
                <Tooltip placement="top" title="STAGING">
                    {this.stepView(2)}
                </Tooltip>
                <Tooltip placement="top" title="LIVE">
                    {this.stepView(3)}
                </Tooltip>
                <Tooltip placement="top" title="PRELIVE">
                    {this.stepView(4)}
                </Tooltip>
            </div>
        );
    }
};

FlowStep.propTypes = {
    step: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired
};
