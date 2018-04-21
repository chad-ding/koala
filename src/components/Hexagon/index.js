/**
 *@Author: chad.ding
 *@Date: 2018-04-20 11:36:38
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isNull } from 'commons/utils';

import './style.less';

export default class Hexagon extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            style: {}
        };
    }
    animateHexagon = (props = this.props) => {
        const { radius, color, center } = props;

        const halfWidth = Math.cos(Math.PI / 6) * radius;
        const halfHeight = Math.sin(Math.PI / 6) * radius;

        const width = halfWidth * 2;
        const height = halfHeight * 2;
        const { left, top } = center;

        let style = {
            opacity: 1,
            width: `${width}px`,
            height: `${height}px`,
            left: `${left}px`,
            top: `${top}px`,
            backgroundColor: color
        };

        window.requestAnimationFrame(() => {
            this.setState({ style });
        });
    }
    componentWillReceiveProps(nextProps) {
        this.animateHexagon(nextProps);
    }
    renderHexagon = () => {
        const { radius, color, index } = this.props;

        const halfWidth = Math.cos(Math.PI / 6) * radius;
        const halfHeight = Math.sin(Math.PI / 6) * radius;

        const triangleTop = {
            top: -1 * halfHeight,
            borderLeft: halfWidth,
            borderRight: halfWidth,
            borderBottom: halfHeight
        };

        const triangleBottom = {
            bottom: -1 * halfHeight,
            borderLeft: halfWidth,
            borderRight: halfWidth,
            borderTop: halfHeight
        };

        document.styleSheets[0].addRule('.hexagon:before', `top:${triangleTop.top}px; border-left:${triangleTop.borderLeft}px solid transparent; border-right:${triangleTop.borderRight}px solid transparent; border-bottom:${triangleTop.borderBottom}px solid ${color};`);
        document.styleSheets[0].addRule('.hexagon:after', `bottom:${triangleBottom.bottom}px; border-left:${triangleBottom.borderLeft}px solid transparent; border-right:${triangleBottom.borderRight}px solid transparent; border-top:${triangleBottom.borderTop}px solid ${color};`);
        document.styleSheets[0].addRule('.hexagon:hover', `filter:drop-shadow(0 0 10px ${color});`);

        this.hexagon.style.transitionDelay = `${index * 0.2}s`;
    }
    componentDidMount() {

        const { onClick, onHover } = this.props;

        this.renderHexagon();
        this.animateHexagon();

        window.setTimeout(() => {
            this.hexagon.style.transitionDelay = '0.1s';
        }, 3000);

        if (!isNull(onClick)) {
            this.hexagon.addEventListener('click', onClick);
        }
        if (!isNull(onHover)) {
            this.hexagon.addEventListener('mouseenter', onHover.enter);
            this.hexagon.addEventListener('mouseleave', onHover.leave);
        }
    }
    render() {
        return (
            <div style={this.state.style} ref={hexagon => {this.hexagon = hexagon;}} className="hexagon">
                <p>{this.props.text}</p>
            </div>
        );
    }

};

Hexagon.propTypes = {
    index: PropTypes.number.isRequired,
    center: PropTypes.shape({
        left: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired
    }).isRequired,
    radius: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func,
    onHover: PropTypes.shape({
        enter: PropTypes.func.isRequired,
        leave: PropTypes.func.isRequired
    })
};

Hexagon.defaultProps = {
    index: 0,
    color: '#689'
};