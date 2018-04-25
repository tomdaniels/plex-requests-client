import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
// import LoginPage from '../components/login';
import Dashboard from '../components/dashboard';
// import NotFoundPage from '../components/error-page';
// import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute
                    exact
                    path="/"
                    component={Dashboard} // component={LoginPage} if auth required.
                />
                {/*<PrivateRoute*/}
                    {/*path="/dashboard"*/}
                    {/*component={Dashboard}*/}
                {/*/>*/}
                {/*<Route*/}
                    {/*component={NotFoundPage}*/}
                {/*/>*/}
            </Switch>
        </div>
    </Router>
);

export default AppRouter;