/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-03 14:34:23
 */

import React, {Component} from 'react';
import {Row, Col, Button, Icon, Input} from 'antd';

import './style.less';

export default class RandomCode extends Component {
    constructor(props){
        super(props);
        let nums = [];
        for(let i = 0; i<4; i++){
            nums.push(Number.parseInt(Math.random()*10));
        }

        this.state = {
            nums,
            randomCode: ''
        };

        this.refresh = this.refresh.bind(this);
        this.validate = this.validate.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    refresh(){
        let nums = [];
        for(let i = 0; i<4; i++){
            nums.push(Number.parseInt(Math.random()*10));
        }

        this.setState({
            nums
        });
    }
    validate(){
        const {nums, randomCode} = this.state;
        return nums.join('') === randomCode;
    }
    inputChange(event){
        this.setState({
            randomCode: event.target.value
        });
    }
    render(){
        return (
            <div>
                <Row gutter={16}>
                   <Col span={10}>
                        <Input value={this.state.randomCode} onChange={this.inputChange} placeholder="请输入验证码"></Input>
                   </Col>
                   <Col span={10}>
                        <ul className="random-code">
                            <li className={`code code-bg${this.state.nums[0]}`}></li>
                            <li className={`code code-bg${this.state.nums[1]}`}></li>
                            <li className={`code code-bg${this.state.nums[2]}`}></li>
                            <li className={`code code-bg${this.state.nums[3]}`}></li>
                        </ul>
                   </Col>
                   <Col span={4}>
                        <Button onClick={this.refresh} type="primary">
                            <Icon type="reload"></Icon>
                        </Button>
                   </Col>
                </Row>
            </div>
        );
    }
};