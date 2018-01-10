/**
 *@Author: chad.ding
 *@Date: 2017-12-28 10:13:03
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import { Icon } from 'antd';
import { isNull } from '../../commons/utils';

export default class HoneycombChart extends Component {
    constructor(props) {
        super(props);
    }
    static option = {
        grid: {
            show: false,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut'
    };
    static countGroup(totalWidth, cellWidth) {
        let result = 1;
        if (1.75 * cellWidth > totalWidth) {
            return result;
        }

        let cellNum = Math.floor((totalWidth - cellWidth) / (0.75 * cellWidth + 3));

        return result + cellNum;

    }
    renderCell(cellNums, dataList) {
        let dataLen = dataList.length;
        let series = [];

        const { padding, symbolRadius } = this.props.options;
        let symbolHeight =  Math.sqrt(3) * symbolRadius;

        const baseOption = {
            type: 'graph',
            layout: 'none',
            symbolSize: [symbolRadius * 2, symbolHeight],
            width: symbolRadius * 2,
            symbol: 'image://' + require('../../../assets/img/hexagon.png'),
            roam: false,
            label: {
                normal: {
                    show: true
                }
            }
        };

        for (let i = 0; i < dataLen; i++) {
            let data = dataList[i];

            let groupNum = Number.parseInt(i / cellNums);
            let index = i % cellNums;
            let offset = 3;

            let option = {
                left: 0.75 * symbolRadius * 2 * index + offset * index + padding,
                top: (function(){
                    if(index % 2){
                        return symbolHeight / 2 + groupNum * symbolHeight + offset * groupNum + padding;
                    }else {
                        return groupNum * symbolHeight + offset * groupNum + padding;
                    }
                })(),
                data: [{
                    name: data,
                    x: 0,
                    y: 0
                }]
            };
            series.push(Object.assign(option, baseOption));
        }
        return series;
    }
    componentWillReceiveProps(nextProps) {

        if(this.props.data !== nextProps.data){
            this.renderChart(nextProps.data);
        }
        
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeChart);
    }
    renderChart(data = this.props.data){
        
        this.chart.resize();

        let { clientWidth} = this.wrapDiv;
        const { symbolRadius, padding } = this.props.options;
        let cellNums = this.constructor.countGroup(clientWidth - padding * 2, symbolRadius * 2);
        
        let series = this.renderCell(cellNums, data);
        this.chart.setOption(Object.assign({ series }, this.constructor.option)); 
    }
    resizeChart() {

        if (!isNull(this.timer)) {
            window.clearTimeout(this.timer);
        }

        this.timer = window.setTimeout(() => {
            this.renderChart();
        }, 1000);
    }
    componentDidMount() {
        this.chart = echarts.init(this.wrapDiv);

        this.resizeChart = this.resizeChart.bind(this);
        window.addEventListener('resize', this.resizeChart);
    }
    render() {
        return (
            <div>
                <h3><Icon type="appstore-o"></Icon>&nbsp;{this.props.title}</h3>
                <div ref={div => {this.wrapDiv = div;}} style={this.props.style}></div>
            </div>
        );
    }
};

HoneycombChart.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    options: PropTypes.shape({
        symbolRadius: PropTypes.number,
        padding: PropTypes.number
    })
};

HoneycombChart.defaultProps = {
    title: '蜂窝图',
    style: {
        width: '600px',
        height: '400px'
    },
    options: {
        symbolRadius: 50,
        padding: 20
    }
};