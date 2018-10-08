import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Home, Me, MapPage, Login } from './pages';

import { Authenticated } from './components/Authenticated';
import { Header } from './components/Header';

import styled from 'styled-components';

const Main = styled.div`
    flex: 1;
`;

const Footer = styled.div`
    flex-shrink: 0;
`;

class PureApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header isAuth={this.props.authenticated} user={this.props.user} />
                    <Main>
                        <Switch>
                            <Authenticated exact path="/profile" Component={Me} {...this.props} />
                            <Authenticated exact path="/map" Component={MapPage} {...this.props} />
                            <Route
                                exact
                                path="/login"
                                render={routerProps => <Login {...this.props} {...routerProps} />}
                            />

                            <Route render={routerProps => <Home {...this.props} {...routerProps} />} />
                        </Switch>
                    </Main>
                    <Footer>APP FOOTER</Footer>
                </Fragment>
            </Router>
        );
    }
}

const App = withTracker(() => {
    const loggingIn = Meteor.loggingIn();
    const user = Meteor.user();
    const userId = Meteor.userId();

    const authenticated = !loggingIn && !!userId;
    const loading = !!loggingIn && !!userId;

    const name = user && user.profile && user.profile.firstName && getUserName(user.profile);
    const emailAddress = user && user.emails && user.email;

    return {
        loggingIn,
        user,
        userId,
        authenticated,
        loading,
        name,
        emailAddress,
    };
})(PureApp);

export { App };
