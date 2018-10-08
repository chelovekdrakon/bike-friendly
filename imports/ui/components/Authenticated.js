import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const Authenticated = ({ userId, Component, path, exact, ...rest }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (userId ? <Component {...props} {...rest} userId={userId} /> : <Redirect to="/login" />)}
    />
);

Authenticated.defaultProps = {
    path: '',
    exact: false,
};

Authenticated.propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    Component: PropTypes.func.isRequired,
    path: PropTypes.string,
    exact: PropTypes.bool,
};
