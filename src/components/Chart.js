import React, { Component, PropTypes } from 'react'
import rd3 from 'react-d3'

const BarChart = rd3.BarChart;

class Chart extends Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    _getRandomInt(min, max) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    }

    _createData(count, min, max) {
        count = count ? count : 5;
        min = min ? min : 0;
        max = max ? max : 100;
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push({"x": i, "y": this._getRandomInt(min, max)})
        }
        return [
            {
                "values": arr
            }
        ];
    }

    render() {

        const { barCount, minHeight, maxHeight } = this.props;
        const data = this._createData(barCount, minHeight, maxHeight)
        return (
            <BarChart
                data={data}
                width={1000}
                height={200}
                fill={'#3182bd'}
                />
        );
    }

}

export default Chart