import React from 'react';

import styled from 'styled-components';
import { RichButton } from './RichButton';
import { PlaceRating } from './PlaceRating';

const Container = styled.div`
    max-width: 110rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #ececec;

    &:last-child {
        border-bottom: none;
    }
`;

export const RatedPlacesList = ({ places, onPlaceRateClick = () => {} }) => (
    <Container>
        {places.map(place => (
            <Row key={place.id}>
                <PlaceRating title={place.title} type={place.type} rating={place.rating} />

                <RichButton text="Vote" theme="light" onClick={() => onPlaceRateClick(place.id)} />
            </Row>
        ))}
    </Container>
);
