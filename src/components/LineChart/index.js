/**
 *@Author: chad.ding
 *@Date: 2017-06-28 09:31:47
 */

import React, { Component } from 'react';
import echarts from 'echarts';
import PropTypes from 'prop-types';
import {Icon} from 'antd';

export default class LineChart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.chart = echarts.init(this.wrapDiv);
    }
    splitData(rawData) {
        let categoryData = [];
        let values = [];
        for (let i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i][0]);
            rawData[i][0] = i;
            values.push(rawData[i]);
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }
    renderItem(params, api) {
        let xValue = api.value(0);
        let openPoint = api.coord([xValue, api.value(1)]);
        let closePoint = api.coord([xValue, api.value(2)]);
        let lowPoint = api.coord([xValue, api.value(3)]);
        let highPoint = api.coord([xValue, api.value(4)]);
        let halfWidth = api.size([1, 0])[0] * 0.35;
        let style = api.style({
            stroke: api.visual('color')
        });

        return {
            type: 'group',
            children: [{
                type: 'line',
                shape: {
                    x1: lowPoint[0],
                    y1: lowPoint[1],
                    x2: highPoint[0],
                    y2: highPoint[1]
                },
                style: style
            }, {
                type: 'line',
                shape: {
                    x1: openPoint[0],
                    y1: openPoint[1],
                    x2: openPoint[0] - halfWidth,
                    y2: openPoint[1]
                },
                style: style
            }, {
                type: 'line',
                shape: {
                    x1: closePoint[0],
                    y1: closePoint[1],
                    x2: closePoint[0] + halfWidth,
                    y2: closePoint[1]
                },
                style: style
            }]
        };
    }
    componentWillReceiveProps(nextProps) {

        let data = this.splitData(nextProps.lineData);
        this.chart.setOption({
            backgroundColor: '#eee',
            animation: false,
            legend: {
                bottom: 10,
                left: 'center',
                data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                    color: '#000'
                },
                position: function(pos, params, el, elRect, size) {
                    let obj = { top: 10 };
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                    return obj;
                },
                extraCssText: 'width: 170px'
            },
            axisPointer: {
                link: { xAxisIndex: 'all' },
                label: {
                    backgroundColor: '#777'
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: false
                    },
                    brush: {
                        type: ['lineX', 'clear']
                    }
                }
            },
            grid: [{
                left: '10%',
                right: '8%',
                bottom: 150
            }],
            xAxis: [{
                type: 'category',
                data: data.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisPointer: {
                    z: 100
                }
            }],
            yAxis: [{
                scale: true,
                splitArea: {
                    show: true
                }
            }],
            dataZoom: [{
                type: 'inside',
                start: 98,
                end: 100,
                minValueSpan: 10
            }, {
                show: true,
                type: 'slider',
                bottom: 60,
                start: 98,
                end: 100,
                minValueSpan: 10
            }],
            series: [{
                name: 'Dow-Jones index',
                type: 'custom',
                renderItem: this.renderItem,
                dimensions: [null, 'open', 'close', 'lowest', 'highest'],
                encode: {
                    x: 0,
                    y: [1, 2, 3, 4],
                    tooltip: [1, 2, 3, 4]
                },
                data: data.values
            }]
        }, true);
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

LineChart.propTypes = {
    lineData: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

LineChart.defaultProps = {
    lineData: [],
    style: {
        width: '600px', 
        height: '400px'
    },
    title: '线性图表'    
};
