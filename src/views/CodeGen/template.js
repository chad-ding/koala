/**
 *@Author: chad.ding
 *@Date: 2017-06-21 17:00:37
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';

class Template extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
				<section>
					<h2>Pom.xml</h2>
					<Input type="textarea" rows={10}></Input>
				</section>
				<section>
					<h2>Main.java</h2>
					<Input type="textarea" rows={10}></Input>
				</section>
				<section>
					<h2>index.php</h2>
					<Input type="textarea" rows={10}></Input>
				</section>
				<Button size="large" type="primary">保存</Button>
			</div>
        );
    }
};

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Template);
