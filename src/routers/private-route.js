import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';

export const PrivateRoute = ({
         isAuthenticated,
         component: Component,
         ...rest
}) => {
    const conditionalRender = (props) => (
        isAuthenticated ? (
            <div>
                <Header/>
                <Component {...props} />
            </div>
        ) : (
            <Redirect
                to="/"
            />
        )
    );

    return (
        <div>
            <Route
                component={conditionalRender}
                {...rest}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
