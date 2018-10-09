import React, { PureComponent } from 'react';

import { GoogleMap } from './google-map';

import styled from 'styled-components';
import { Section } from '../../components/Section';
import { RatedPlacesList } from '../../components/RatedPlacesList';

const GOOGLE_KEY = '';

const GOLOS_KEYS = {
    constPermlik: '',
    acc: '',
    pass: '',
    wif: '',
    author: '',
    parentPermlink: '',
    permLink: '',
    title: '',
};

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

const RatingContainer = styled.div`
    display: flex;
    padding: 15rem 0;
    align-items: center;
    justify-content: center;
`;

class Map extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            place: null,
        };

        this.onPlacePick = this.onPlacePick.bind(this);
        this.handleVote = this.handleVote.bind(this);
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
                    placeId,
                },
            });
        }
    }

    handleVote() {
        function sendRequest(status, data) {
            const context = {};

            const body = data;

            if (status == 'comment') {
                context.parentAuthor = GOLOS_KEYS.author;
                context.permlink = String(Math.floor(Math.random() * (10000 - 1 + 1)) + 1);
            } else {
                context.parentAuthor = '';
                context.permlink = GOLOS_KEYS.permLink;
            }

            window.golos.broadcast.comment(
                GOLOS_KEYS.wif,
                context.parentAuthor,
                GOLOS_KEYS.parentPermlink,
                GOLOS_KEYS.author,
                context.permlink,
                GOLOS_KEYS.title,
                body,
                '',
                function(err, result) {
                    if (!err) {
                        console.log(result);
                    } else console.error(err);
                }
            );
        }

        if (this.state.place) {
            const place = { ...this.state.place };

            window.golos.api.getContent(GOLOS_KEYS.acc, GOLOS_KEYS.constPermlik, function(err, result) {
                console.log(result);
                result.id == 0
                    ? sendRequest('post', `place: ${place.placeId}, lng: ${place.lng}, lat: ${place.lat}`)
                    : sendRequest('comment', place);
                if (err) console.error(err);
            });
        } else {
            console.log('choose the place');
        }
    }

    render() {
        return (
            <Container>
                <GoogleMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `90vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onPlacePick={this.onPlacePick}
                    {...this.props}
                />
                <RatingContainer>
                    <RatedPlacesList places={this.props.ratedPlaces} />
                </RatingContainer>
            </Container>
        );
    }
}

Map.defaultProps = {
    ratedPlaces: [
        {
            id: 1,
            title: 'Cafe Madrid Rio',
            type: 'Restaurant',
            rating: 5,
        },
        {
            id: 2,
            title: 'Starbucks',
            type: 'Cafe',
            rating: 4,
        },
        {
            id: 3,
            title: 'Farmacijia 1',
            type: 'Farm',
            rating: 3,
        },
        {
            id: 4,
            title: 'Principle Pio',
            type: 'Shopping Mall',
            rating: 5,
        },
        {
            id: 5,
            title: 'Cinema DD',
            type: 'Cinema',
            rating: 3,
        },
    ],
};

export default Map;
