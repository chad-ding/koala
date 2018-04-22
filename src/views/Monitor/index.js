/**
 *@Author: chad.ding
 *@Date: 2018-04-22 11:33:59
 */

import React, { Component } from 'react';

import HoneycombGraph from '../../components/HoneycombGraph';

export default class Monitor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cellData: []
        };
    }
    componentDidMount() {
        let cellData = [];
        for (let i = 0; i < 20; i++) {
            cellData.push(`节点${i}`);
        }
        this.setState({
            cellData
        });
    }
    render() {
        return (
            <div>
				<HoneycombGraph
					padding={10}
					cellOffset={10}
					cellRadius={50}
					data={this.state.cellData}
				/>
			</div>
        );
    }
}