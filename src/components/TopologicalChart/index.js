/**
 *@Author: chad.ding
 *@Date: 2017-06-28 11:31:24
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import { Icon } from 'antd';

export default class TopologicalChart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.chart = echarts.init(this.wrapDiv);
    }
    componentWillReceiveProps(nextProps) {

        let { data } = nextProps;
        let legends = data.map(item => item.name);

        this.chart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: legends
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        });
    }
    render() {
        return (
            <div>
                <h3><Icon type="bar-chart"></Icon>&nbsp;{this.props.title}</h3>
                <div ref={div => {this.wrapDiv = div;}} style={this.props.style}></div>
            </div>
        );
    }
}

TopologicalChart.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

TopologicalChart.defaultProps = {
    data: {},
    style: {
        width: '600px',
        height: '400px'
    },
    title: '饼状图表'
};
