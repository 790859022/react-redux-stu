import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import {view as TopMenu} from './TopMenu';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';


const Routes = () => {
    return (
        <Router>
            <div>
                <TopMenu/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>

    )
}
export default Routes;