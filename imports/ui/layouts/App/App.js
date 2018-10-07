import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import {
    Home,
    Me,
    MapPage,
    Login
} from '/imports/ui/pages';

import { Authenticated } from '/imports/ui/components'

import styled from 'styled-components';

import { Header } from './components';

const Main = styled.div`
    flex: 1;
`;

const Footer = styled.div`
    flex-shrink: 0;
`;

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header isAuth={this.props.authenticated} user={this.props.user} />
                    <Main>
                        <Switch>
                            <Authenticated exact path="/profile" component={Me} {...this.props} />
                            <Authenticated exact path="/map" component={MapPage} {...this.props} />
                            <Route exact path="/login" render={(routerProps) => <Login {...this.props} {...routerProps} />} />

                            <Route render={(routerProps) => <Home {...this.props} {...routerProps} />} />
                        </Switch>
                    </Main>
                    <Footer>APP FOOTER</Footer>
                </Fragment>
            </Router>
        );
    }
}

export default withTracker(() => {
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
        emailAddress
    };
})(App);