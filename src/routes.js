import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import App from './containers/App'
import Page from './containers/Page'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path=":barCount&:minHeight&:maxHeight" component={Page}/>
    </Router>
)