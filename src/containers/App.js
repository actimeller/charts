import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Chart from '../components/Chart'

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    render() {
        return (
                <div>
                    <h1>First Chart</h1>
                    <Chart />
                    <Link to='/12&10&200'> Second test page </Link>
                </div>
        );
    }

}

export default App