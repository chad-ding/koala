/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-06-27 22:19:37
 */

import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import LineChart from '../../components/LineChart';
import { getLineChartData } from './action';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getLineChartData());
    }
    render() {

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>系统监控</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/>
                <LineChart title="上证指数" lineData={this.props.lineData} style={{ width: '48%', height: '400px'}}></LineChart>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        lineData: state.dashboardReducer.lineData
    };
}

export default connect(mapStateToProps)(Dashboard);
