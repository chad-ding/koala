/**
 *@Author: chad.ding
 *@Date: 2017-06-28 10:53:54
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import { Icon } from 'antd';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.chart = echarts.init(this.wrapDiv);
    }
    componentWillReceiveProps(nextProps) {

        let { data } = nextProps;

        let xAxisData = Object.keys(data),
        	yAxisData = [];

    	for(let key in data){
    		yAxisData.push(data[key]);
    	}
		
        let option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: xAxisData,
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: yAxisData
            }]
        };

        this.chart.setOption(option);
    }
    render() {
        return (
            <div>
                <h3><Icon type="bar-chart"></Icon>&nbsp;{this.props.title}</h3>
                <div ref={div => {this.wrapDiv = div;}} style={this.props.style}></div>
            </div>
        );
    }
};

BarChart.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};

BarChart.defaultProps = {
    data: {},
    style: {
        width: '600px',
        height: '400px'
    },
    title: '柱状图表'
};
