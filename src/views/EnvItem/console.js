/**
 *@Author: chad.ding
 *@Date: 2017-06-23 19:14:09
 */

import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { getConsoleList} from './action';

class Console extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
		let { dispatch } = this.props;
		dispatch(getConsoleList());
    }
    render() {

        let columns = [{
            title: '控制台',
            dataIndex: 'console',
            key: 'console'
        }, {
            title: '账户',
            dataIndex: 'account',
            key: 'account'
        }, {
            title: 'BO',
            dataIndex: 'bo',
            key: 'bo'
        }, {
            title: '存储引擎',
            dataIndex: 'engine',
            key: 'engine'
        }];

        return (
            <Table rowKey={record => record.name}  dataSource={this.props.consoleList} columns={columns}></Table>
        );
    }
};

function mapStateToProps(state) {
    return {
		consoleList: state.envItemReducer.consoleList
    };
}

export default connect(mapStateToProps)(Console);
