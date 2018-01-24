import React, {Component} from 'react';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    )
}

export default Routes;