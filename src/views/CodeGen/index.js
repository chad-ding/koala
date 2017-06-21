/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 11:35:00
 */

import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import Params from './params';
import Template from './template';

import './style.less';

class CodeGen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let TabPane = Tabs.TabPane;
        return (
            <div>
                <Tabs defaultActiveKey="params" onChange={this.tabChange} type="card">
                    <TabPane tab="参数" key="params">
                        <Params></Params>
                    </TabPane>
                    <TabPane tab="模板" key="template">
                        <Template></Template>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(CodeGen);
