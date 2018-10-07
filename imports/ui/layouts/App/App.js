import React, { Fragment, PureComponent } from 'react';
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

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };

        this.onPlacePick = this.onPlacePick.bind(this)
        
    }

    onPlacePick({ placeId, latLng }) {
        if (placeId) {
            console.log('place id: ', placeId);

            const lat = latLng.lat();
            const lng = latLng.lng();

            console.log('lat: ', lat);
            console.log('lng: ', lng);

            // fetch(`https://maps.googleapis.com/maps/api/place/details/output?key=AIzaSyAVFInxP4hbkJFbLz_L9XzRYUb3RaggzQc&placeid=${placeId}`, { mode: 'no-cors' }));
        }
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header isAuth={this.props.authenticated} user={this.props.user} />
                    <Main>
                        <Switch>
                            <Authenticated exact path="/profile" component={Me} {...this.props} />
                            <Authenticated 
                                exact 
                                path="/map" 
                                component={MapPage} 
                                {...this.props} 
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVFInxP4hbkJFbLz_L9XzRYUb3RaggzQc&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                onPlacePick={this.onPlacePick}
                            />

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