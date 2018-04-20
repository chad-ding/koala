/**
 *@Author: chad.ding
 *@Date: 2018-04-20 11:36:47
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hexagon from '../Hexagon';
import { isNull } from 'commons/utils';

import './style.less';

export default class HoneycombGraph extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            points: []
        };
    }
    caculateLocation = (rowNum, rowIndex, cells) => {

        const isEven = rowNum % 2 === 0;

        const { cellRadius, cellOffset, padding } = this.props;
        const radian = Math.PI / 6;
        const cellWidth = Math.cos(radian) * cellRadius * 2;

        let location = {
            top: padding,
            left: padding
        };

        let standardCell = null;
        if (rowNum === 0) {
            location.top = location.top + cellRadius;
        } else {
            standardCell = cells[rowNum - 1][0];
            location.top = standardCell.location.top + Math.cos(radian) * (2 * Math.cos(radian) * cellRadius + cellOffset);
        }

        if (rowIndex === 0 && isEven) {
            location.left = location.left + Math.cos(radian) * cellRadius;
        } else if (rowIndex === 0) {
            location.left = location.left + cellWidth + cellOffset / 2;
        } else {
            standardCell = cells[rowNum][rowIndex - 1];
            location.left = standardCell.location.left + cellWidth + cellOffset;
        }
        return location;
    }
    locatePoints = (data, capacity = { evenNum: 0, oddNum: 0 }) => {

        if (isNull(data)) {
            return;
        }
        let cells = [];

        const { evenNum, oddNum } = capacity;

        let pointList = [];
        cells.push(pointList);

        let rowCount = 0;
        for (let i = 0, len = data.length; i < len; i++) {
            let item = data[i];

            let group = Math.floor((i + 1) / (evenNum + oddNum));
            let remainder = (i + 1) % (evenNum + oddNum);
            let isEven = remainder !== 0 && remainder <= evenNum;

            let rowNum = 0;

            if (group === 0) {
                rowNum = isEven ? 0 : 1;
            } else {
                rowNum = (group * 2 - 1) + (remainder === 0 ? 0 : isEven ? 1 : 2); //属于第几行
            }

            if (rowNum !== rowCount) {
                pointList = [];
                cells.push(pointList);
                rowCount = rowNum;
            }
            let rowIndex = 0; //当前行的第几个
            if (remainder === 0) {
                rowIndex = oddNum - 1;
            } else if (isEven) {
                rowIndex = remainder - 1;
            } else {
                rowIndex = remainder - evenNum - 1;
            }

            let location = this.caculateLocation(rowNum, rowIndex, cells);
            let point = {
                data: item,
                location: location
            };
            pointList.push(point);
        }

        return cells;
    }
    static rowCapacity(clientWidth, radius, offset, padding) {

        let width = clientWidth - padding * 2;

        const radian = Math.PI / 6;
        const cellWidth = Math.cos(radian) * radius * 2;

        if (cellWidth > width) {
            throw new Error('page width is not enough');
        }

        const cellSpace = cellWidth + offset;

        let evenNum = Math.floor(width / cellSpace);
        let surplusWidth = width - evenNum * cellSpace;
        if (surplusWidth >= cellWidth) {
            ++evenNum;
        }

        let usefulWidth = width - cellWidth - offset / 2;
        let oddNum = Math.floor(usefulWidth / cellSpace);
        surplusWidth = usefulWidth - oddNum * cellSpace;
        if (surplusWidth >= cellWidth) {
            ++oddNum;
        }

        return {
            evenNum,
            oddNum
        };
    }
    renderGraph = (data = this.props.data) => {
        const clientWidth = this.graph.clientWidth;
        const radius = this.props.cellRadius;
        const offset = this.props.cellOffset;
        const padding = this.props.padding;

        let capacity = this.constructor.rowCapacity(clientWidth, radius, offset, padding);
        let cells = this.locatePoints(data, capacity);

        let points = [];
        !isNull(cells) && cells.forEach(cell => cell.forEach(item => points.push({ ...item.location })));
        this.setState({
            points
        });
    }
    resizeGraph = () => {
        this.renderGraph();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.renderGraph(nextProps.data);
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.resizeGraph);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeGraph);
    }
    cellClick = () => {
        console.log('cell is clicked...');
    }
    render() {

        return (
            <div ref={graph => {this.graph = graph;}} className="honeycomb-graph">
                {
                    this.state.points.map( (item, index) => <Hexagon key={index.toString()} index={index} onClick={this.cellClick} radius={this.props.cellRadius} center={item}></Hexagon>)
                }
            </div>
        );
    }
};

HoneycombGraph.propTypes = {
    padding: PropTypes.number.isRequired,
    cellOffset: PropTypes.number.isRequired,
    cellRadius: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
};

HoneycombGraph.defaultProps = {
    padding: 20,
    cellOffset: 10,
    cellRadius: 50,
    data: []
};