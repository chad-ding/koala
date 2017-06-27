/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-06-27 22:19:37
 */

import React, { Component } from 'react';
import echarts from 'echarts';
import { Breadcrumb, Icon } from 'antd';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let chart = echarts.init(document.getElementById('chart'));
        chart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
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
                <br/><br/>
				<div style={{width: '600px', height: '400px'}} id="chart"></div>
			</div>
        );
    }
};
