/**
 *@Author: chad.ding
 *@Date: 2017-12-25 10:33:12
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import { Icon } from 'antd';

export default class HoneycombChart extends Component {
	constructor(props){
		super(props);
	}
	static option = {
	    grid: {
	        show: false,
	        left: 20,
	        top: 20,
	        right: 20,
	        bottom: 20
	    },
	    animationDurationUpdate: 1500,
	    animationEasingUpdate: 'quinticInOut'
	};
	static countGroup(totalWidth, cellWidth){
		let result = 1;
		if(1.75 * cellWidth > totalWidth){
			return result;
		}
		
		let cellNum = Math.floor((totalWidth - cellWidth) / (0.75 * cellWidth));

		return result + cellNum;
		
	}
	renderCell(cellNums){
		let dataLen = this.props.data.length;

		let series = [];

		const baseOption = {
	        type: 'graph',
	        layout: 'none',
	        symbolSize: this.props.options.symbolSize,
	        width: this.props.options.symbolSize,
	        symbol: 'image://' + require('../../../assets/img/hexagon.png'),
	        roam: true,
	        label: {
	            normal: {
	                show: true
	            }
	        }
	    };

	    for(let i = 0; i < dataLen; i++){
			let data = this.props.data[i];

			let groupNum = Number.parseInt(i / cellNums );
			let index = i % cellNums;
			let offset = 3;

			let option = {
				left: 0.75 * this.props.options.symbolSize * index + offset*index,
				top: index % 2 ? this.props.options.symbolSize / 2 + groupNum * this.props.options.symbolSize + offset*groupNum : groupNum * this.props.options.symbolSize + offset * groupNum,
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
	componentDidMount() {

		this.chart = echarts.init(this.wrapDiv);
		
		let renderWidth = this.wrapDiv.clientWidth - this.constructor.option.grid.left - this.constructor.option.grid.right;
		let symbolSize = this.props.options.symbolSize;
		
		let cellNums = this.constructor.countGroup(renderWidth, symbolSize);
		
		let series = this.renderCell(cellNums);

		this.chart.setOption(Object.assign({series}, this.constructor.option));
		
    }
	render(){
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
    	symbolSize: PropTypes.number
    }).isRequired
};

HoneycombChart.defaultProps = {
	title: '蜂窝图',
    style: {
        width: '600px',
        height: '400px'
    },
    options: {
    	symbolSize: 200
    }
};