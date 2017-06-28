/**
 *@Author: chad.ding
 *@Date: 2017-06-28 16:37:35
 */

import React, { Component } from 'react';
import echarts from 'echarts';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default class RadarChart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.chart = echarts.init(this.wrapDiv);
    }
    componentWillReceiveProps(nextProps) {
        let { dataBJ, dataGZ, dataSH } = nextProps.data;
        let lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

        let option = {
            backgroundColor: '#161627',
            title: {
                text: 'AQI - 雷达图',
                left: 'center',
                textStyle: {
                    color: '#eee'
                }
            },
            legend: {
                bottom: 5,
                data: ['北京', '上海', '广州'],
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                selectedMode: 'single'
            },
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 20,
            //     dimension: 6,
            //     inRange: {
            //         colorLightness: [0.5, 0.8]
            //     }
            // },
            radar: {
                indicator: [
                    { name: 'AQI', max: 300 },
                    { name: 'PM2.5', max: 250 },
                    { name: 'PM10', max: 300 },
                    { name: 'CO', max: 5 },
                    { name: 'NO2', max: 200 },
                    { name: 'SO2', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [{
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#F9713C'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            }, {
                name: '上海',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataSH,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#B3E4A1'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            }, {
                name: '广州',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataGZ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
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

RadarChart.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

RadarChart.defaultProps = {
    data: {},
    style: {
        width: '600px',
        height: '400px'
    },
    title: '雷达图'
};
