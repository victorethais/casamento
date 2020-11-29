import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Convite from '../views/convite';

const Routes = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Convite} />
        </Switch>
    </Router>
);

export default Routes;
