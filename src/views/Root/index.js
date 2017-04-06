/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 10:22:59
 */

import React, {Component} from 'react';

import './style.less';

export default class Root extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </div>
        );
    }
};