import React, { PureComponent } from 'react';

import { GoogleMap } from './google-map';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    border: 0.2rem solid black;
    border-radius: 0.3rem;
    margin: 1rem 0;
    padding: 0.4rem 2rem;
    font-size: 1.5rem;
    min-width: 10%;

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
        color: red;
        border-color: red;
    }
`;

class Map extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            place: null
        };

        this.onPlacePick = this.onPlacePick.bind(this);
        this.handleVote = this.handleVote.bind(this)
    }

    onPlacePick({ placeId, latLng }) {
        if (placeId) {
            console.log('place id: ', placeId);

            const lat = latLng.lat();
            const lng = latLng.lng();

            console.log('lat: ', lat);
            console.log('lng: ', lng);

            this.setState({
                place: {
                    lat,
                    lng,
                    placeId
                }
            });

            // fetch(`https://maps.googleapis.com/maps/api/place/details/output?key=AIzaSyAVFInxP4hbkJFbLz_L9XzRYUb3RaggzQc&placeid=${placeId}`, { mode: 'no-cors' }));
        }
    }

    handleVote() {
        console.log(this.state.place);
    }
    
    render() {
        return (
            <Container>
                <GoogleMap 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVFInxP4hbkJFbLz_L9XzRYUb3RaggzQc&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onPlacePick={this.onPlacePick}
                    {...this.props}
                />
                <Button onClick={this.handleVote}>VOTE</Button>
            </Container>
        );
    }
}

export default Map;
  