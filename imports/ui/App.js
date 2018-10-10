import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Home, MapPage, Login, Profile } from './pages';

import { Authenticated } from './components/Authenticated';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlacePage } from './pages/Place';

const Main = styled.div`
    flex: 1;
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
                            <Authenticated exact path="/profile" Component={Profile} {...this.props} />
                            <Authenticated exact path="/map" Component={MapPage} {...this.props} />
                            <Authenticated exact path="/place" Component={PlacePage} {...this.props} />
                            <Route
                                exact
                                path="/login"
                                render={routerProps => <Login {...this.props} {...routerProps} />}
                            />

                            <Route exact path="/" render={routerProps => <Home {...this.props} {...routerProps} />} />
                        </Switch>
                    </Main>
                    <Footer />
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
