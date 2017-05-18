/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 16:48:24
 */

import React, { Component, PropTypes } from 'react';
import { Tabs, Breadcrumb, Icon, Table, Row, Col, Button, Input } from 'antd';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {getAppList, changeTab} from './action';

import './style.less';

const columns = [{
    title: 'Parent',
    dataIndex: 'parent',
    key: 'parent',
    render: text => <a href="javascript:;">{text}</a>
}, {
    title: 'Value',
    dataIndex: 'value',
    key: 'value'
}, {
    title: 'Text',
    dataIndex: 'text',
    key: 'text'
}, {
    title: 'Desc',
    dataIndex: 'desc',
    key: 'desc'
}];

const tabMap = {
    channel: '频道',
    queue: '队列',
    table: '数据表'
};

class AppList extends Component {
    constructor(props) {
        super(props);
        this.tabChange = this.tabChange.bind(this);
    }
    componentDidMount(){
        const { dispatch } = this.props;
        if(!this.props.fetched){
            dispatch(getAppList({ parent: 'occupation' }));
        }
    }
    tabChange(key){
        const { dispatch } = this.props;
        dispatch(changeTab(key));
    }
    render() {
        const TabPane = Tabs.TabPane;
        const Search = Input.Search;

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>项目接入</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {tabMap[this.props.tab]}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/><br/>
                <Tabs defaultActiveKey="channel" onChange={this.tabChange} type="card">
                    <TabPane tab="频道" key="channel">
                        <Row>
                           <Col span={6}>
                                <Search size="large"></Search>
                           </Col>
                           <Col span={2}>
                                &nbsp;&nbsp;<Button size="large" type="primary">搜索</Button>
                           </Col>
                           <Col span={4} offset={12}>
                                <Link to="/channel/new"><Button size="large" type="primary">申请频道</Button></Link>
                           </Col>
                        </Row>
                        <Table columns={columns} dataSource={this.props.appList}></Table>
                    </TabPane>
                    <TabPane tab="队列" key="queue">
                        <Row>
                           <Col span={6}>
                                <Search size="large"></Search>
                           </Col>
                           <Col span={2}>
                                &nbsp;&nbsp;<Button size="large" type="primary">搜索</Button>
                           </Col>
                           <Col span={4} offset={12}>
                                <Button size="large" type="primary">申请队列</Button>
                           </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="数据表" key="table">
                        <Row>
                           <Col span={6}>
                                <Search size="large"></Search>
                           </Col>
                           <Col span={2}>
                                &nbsp;&nbsp;<Button size="large" type="primary">搜索</Button>
                           </Col>
                           <Col span={4} offset={12}>
                                <Button size="large" type="primary">申请数据表</Button>
                           </Col>
                        </Row>
                    </TabPane>
                </Tabs>  
            </div>
        );
    }
};

AppList.propTypes = {
    appList: PropTypes.array.isRequired,
    fetched: PropTypes.bool.isRequired,
    tab: PropTypes.string.isRequired
};

AppList.defaultProps = {
    tab: 'channel'
};

function mapStateToProps(state) {
    return {
        appList: state.appListReducer.appList,
        fetched: state.appListReducer.fetched,
        tab: state.appListReducer.tab
    };
}

export default connect(mapStateToProps)(AppList);
