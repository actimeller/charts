import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Chart from '../components/Chart'

class Page extends Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    render() {
        const { barCount, minHeight, maxHeight } = this.props.params;
        return (
                <div>
                    <h1>Second Chart</h1>
                    <Chart barCount={barCount}
                            minHeight={minHeight}
                            maxHeight={maxHeight}
                        />
                    <Link to='/'> Back </Link>

                </div>
        );
    }

}

export default Page