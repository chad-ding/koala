/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-19 11:35:00
 */

import React, { Component } from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('note module did mount...');
    }
    componentWillUnmount(){
        console.log('note module will unmount...');
    }
    render() {
        return (
            <div>
                111111111111111
            </div>
        );
    }
};
