import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        this.pic = require('../../assets/img/1.gif');

        return <a href = "javascript:;"
        onClick = {
            e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            }
        }> { name } </a>;
    }

    render() {
        return (<p>
			        Show:
			        {' '}
			        {this.renderFilter('SHOW_ALL', 'All')}
			        {', '}
			        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
			        {', '}
			        {this.renderFilter('SHOW_ACTIVE', 'Active')}
			        .
                    <img src={this.pic} alt="image not found"/>
			      </p>);
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};
