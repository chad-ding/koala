/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-06-27 22:19:37
 */

import React, { Component } from 'react';
import { Breadcrumb, Icon, Row, Col } from 'antd';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import TopologicalChart from '../../components/TopologicalChart';
import RadarChart from '../../components/RadarChart';
import { getLineChartData, getBarChartData, getPieChartData, getRadarChartData, getTopologicalChartData } from './action';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getLineChartData());
        dispatch(getBarChartData());
        dispatch(getPieChartData());
        dispatch(getRadarChartData());
        dispatch(getTopologicalChartData());
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
                <Row gutter={16}>
                    <Col span={12}>
                        <LineChart title="上证指数" data={this.props.lineData} style={{ width: '100%', height: '400px'}}></LineChart>
                    </Col>
                    <Col span={12}>
                        <BarChart title="一周涨幅" data={this.props.barData} style={{ width: '100%', height: '400px'}}></BarChart>
                    </Col>
                </Row>
                <br/>
                <Row gutter={16}>
                    <Col span={12}>
                        <PieChart title="站点浏览量" data={this.props.pieData} style={{ width: '100%', height: '400px'}}></PieChart>
                    </Col>
                    <Col span={12}>
                        <RadarChart title="AQI" data={this.props.radarData} style={{ width: '100%', height: '400px'}}></RadarChart>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <TopologicalChart title="拓扑图" data={this.props.topologicalData}></TopologicalChart>
                    </Col>
                </Row>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        lineData: state.dashboardReducer.lineData,
        barData: state.dashboardReducer.barData,
        pieData: state.dashboardReducer.pieData,
        radarData: state.dashboardReducer.radarData,
        topologicalData: state.dashboardReducer.topologicalData
    };
}

export default connect(mapStateToProps)(Dashboard);