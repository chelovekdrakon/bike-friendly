import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PlaceRating } from './PlaceRating';

const Container = styled(Link)`
    max-width: 110rem;
    text-decoration: none;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3.5rem 0;
    border-bottom: 2px solid #ececec;

    &:last-child {
        border-bottom: none;
    }
`;

export const RatedPlacesList = ({ places, onPlaceRateClick = () => {} }) => (
    <Container to="/place">
        {places.map(place => (
            <Row key={place.id}>
                <PlaceRating title={place.title} type={place.type} rating={place.rating} descriptionWidth={'60rem'} />
            </Row>
        ))}
    </Container>
);
