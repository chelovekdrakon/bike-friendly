import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Authenticated = ({ userId, component, path, exact, ...rest }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            userId ? (
                React.createElement(component, {
                    ...props,
                    ...rest,
                    userId,
                })
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

Authenticated.defaultProps = {
    path: '',
    exact: false,
};

Authenticated.propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
    exact: PropTypes.bool,
};

export default Authenticated;
