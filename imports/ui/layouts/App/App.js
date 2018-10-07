import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import {
    Home,
    Me,
    MapPage,
    Login,
    NotFound
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

const App = props => (
    <Router>
        <Fragment>
            <Header isAuth={props.authenticated} user={props.user} />
            <Main>
                <Switch>
                    <Authenticated exact path="/profile" component={Me} {...props} />
                    <Authenticated 
                        exact 
                        path="/map" 
                        component={MapPage} 
                        {...props} 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVFInxP4hbkJFbLz_L9XzRYUb3RaggzQc&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />

                    <Route exact path="/login" render={(routerProps) => <Login {...props} {...routerProps} />} />

                    <Route render={(routerProps) => <Home {...props} {...routerProps} />} />
                </Switch>
            </Main>
            <Footer>APP FOOTER</Footer>
        </Fragment>
    </Router>
);

// const App = props => (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Home}/>
//         </Switch>
//     </Router>
// );

App.defaultProps = {
    
};

App.propTypes = {
    
};

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