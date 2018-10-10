import React, { PureComponent } from 'react';

import styled from 'styled-components';
import Select from 'react-select';

import { GoogleMap } from './google-map';
import { RatedPlacesList } from '../../components/RatedPlacesList';
import { BRAND_PRIMARY } from '../../constants/colors';
import { RichButton } from '../../components/RichButton';
import { page } from '../../hocs/page';
import { Modal } from '../../components/Modal';
import { PlaceForm } from '../../components/PlaceForm';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const GOOGLE_KEY = 'AIzaSyBIb_i0XALoy1-IDikhnFWjNE-nk1Gznzk';
// const GOOGLE_KEY = '';

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
    align-items: center;
`;

const GoogleMapContainer = styled.div`
    height: 90vh;
    width: 100%;
`;

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 15rem;
    align-items: stretch;
    justify-content: center;
    max-width: 70%;
`;

const Filters = styled.div`
    display: flex;
    padding: 13rem 0;

    div {
        margin-right: 3.3rem;

        &:last-child {
            margin-right: 0;
        }
    }
`;

const Filter = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    label {
        font-size: 2rem;
        color: #ececec;
        margin-bottom: 0.7rem;
    }
`;

const ControlsContainer = styled.div`
    padding-top: 13rem;
    display: flex;
    justify-content: center;
`;

class Map extends PureComponent {
    state = {
        places: [
            {
                id: 1,
                title: 'A Cafe Madrid Rio',
                type: 'Shopping Mall',
                rating: 5,
            },
            {
                id: 2,
                title: 'A Starbucks',
                type: 'Shopping Mall',
                rating: 4,
            },
            {
                id: 3,
                title: 'A Farmacijia 1',
                type: 'Shopping Mall',
                rating: 3,
            },
            {
                id: 4,
                title: 'A Principle Pio',
                type: 'Shopping Mall',
                rating: 5,
            },
            {
                id: 5,
                title: 'A Cinema DD',
                type: 'Shopping Mall',
                rating: 3,
            },
        ],

        categories: [
            {
                label: 'Shopping mall',
                value: 'shopping_mall',
            },
            {
                label: 'Cafe',
                value: 'cafe',
            },
            {
                label: 'Cinema',
                value: 'cinema',
            },
        ],

        letters: Array.from({ length: 25 }).map((_, index) => ({
            label: String.fromCharCode(index + 65),
            value: String.fromCharCode(index + 65),
        })),

        ratings: Array.from({ length: 5 }).map((_, index) => ({
            label: '★'.repeat(5 - index),
            value: 5 - index,
        })),

        selectedCategory: null,
        selectedLetter: null,
        selectedRating: null,
    };

    componentDidMount() {
        this.setState({
            selectedCategory: this.state.categories[0],
            selectedLetter: this.state.letters[0],
            selectedRating: this.state.ratings[0],
        });
    }

    selectStyles = {
        control: (base, state) => {
            let borderColor = base.borderColor;

            if (state.isFocused) {
                borderColor = BRAND_PRIMARY;
            }

            return { ...base, borderColor, boxShadow: 'none', fontSize: '2.5rem', ':hover': { borderColor } };
        },

        option: (base, state) => {
            console.log(base, state);

            const override = {
                backgroundColor: BRAND_PRIMARY,
                color: 'white',
            };

            if (state.isFocused || state.isSelected) {
                return { ...base, ...override };
            }
            return { ...base, ':active': { ...override }, ':hover': { ...override } };
        },
    };

    onPlacePick = ({ placeId, latLng }) => {
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
    };

    handleVote = () => {
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
    };

    onPlacesChanged = places => {
        this.setState({
            places: places.map(place => {
                return { ...place, rating: Math.random() * getRandomArbitrary(3, 6) };
            }),
        });
    };

    handleCategoryChange = selectedCategory => {
        this.setState({ selectedCategory });
    };

    handleLetterChange = selectedLetter => {
        this.setState({ selectedLetter });
    };

    handleRatingChange = selectedRating => {
        this.setState({ selectedRating });
    };

    refModal = node => {
        this.modal = node;
    };

    openModal = () => {
        this.modal.open();
    };

    render() {
        return (
            <Container>
                <GoogleMapContainer>
                    <GoogleMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        onPlacePick={this.onPlacePick}
                        {...this.props}
                        onPlacesChanged={this.onPlacesChanged}
                    />
                </GoogleMapContainer>
                <RatingContainer>
                    <Filters>
                        <Filter>
                            <label>Category</label>
                            <Select
                                value={this.state.selectedCategory}
                                onChange={this.handleCategoryChange}
                                options={this.state.categories}
                                styles={this.selectStyles}
                            />
                        </Filter>

                        <Filter>
                            <label>A-z</label>
                            <Select
                                value={this.state.selectedLetter}
                                onChange={this.handleLetterChange}
                                options={this.state.letters}
                                styles={this.selectStyles}
                            />
                        </Filter>

                        <Filter>
                            <label>Rating</label>
                            <Select
                                value={this.state.selectedRating}
                                onChange={this.handleRatingChange}
                                options={this.state.ratings}
                                styles={this.selectStyles}
                            />
                        </Filter>
                    </Filters>
                    <RatedPlacesList places={this.state.places} />

                    <ControlsContainer>
                        <RichButton text="Add" small onClick={this.openModal} theme="light" />
                    </ControlsContainer>
                </RatingContainer>

                <Modal ref={this.refModal}>
                    <PlaceForm onSubmit={() => this.modal.close()} />
                </Modal>
            </Container>
        );
    }
}

Map.defaultProps = {};

export default page(Map);
