/**
 *@Author: chad.ding
 *@Date: 2017-06-29 09:37:47
 */

import React, { Component } from 'react';

import './style.less';

export default class Help extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
				<h2 className="text-panel text-success text-center">Koala web app</h2>
				<div className="text-panel text-info">
					<dl>
						<dt>1、概述</dt>
						<dd>本项目专为学习React而创建。</dd>
						<dt>2、构建工具与技术栈</dt>
						<dd>2.1、采用react15+redux3作为开发框架。</dd>
						<dd>2.2、采用LESS作为CSS样式预编译语言。</dd>
    					<dd>2.3、项目构建工具为webpack，不要问为什么，因为这样逼格显得高大上。</dd>
    					<dd>2.4、采用ANTD作为组件库,本来想自己写的但是还不大会就先抄着吧。</dd>
    					<dd>2.5、项目后端待搭建。</dd>
    					<dt>3、项目搭建与运行</dt>
    					<dd>3.1、安装node，已安装请跳过。</dd>
    					<dd>3.2、npm install安装package.json中定义的node模块到本地，其中包括webpack等各类开发工具以及组件库。</dd>
    					<dd>3.3、启动数据模拟服务</dd>
    					<dd className="secondary-item">3.3.1、安装express组件，进入simulator_node目录打开命令行工具，输入node index.js命令启动node web服务。</dd>
    					<dd className="secondary-item">3.3.2、如果没有安装python请先进行安装，进入simulator_python目录，输入python index.py命令启动python web服务。</dd>
    					<dd>3.4、npm run dev启动本地开发环境。</dd>
        				<dd>3.5、npm run build对项目进行打包。</dd>
					</dl>
				</div>
				<div className="text-panel text-warning">
					The MIT License (MIT) <br/><br/>
					Copyright (c) 2011-2016 Chad.Ding, Inc. <br/><br/>
					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the "Software"), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions: <br/><br/>

					The above copyright notice and this permission notice shall be included in
					all copies or substantial portions of the Software. <br/><br/>

					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
					THE SOFTWARE.
				</div>
			</div>
        );
    }
};
