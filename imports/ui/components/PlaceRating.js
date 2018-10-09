import React from 'react';
import styled from 'styled-components';

import { RatingStars } from './RatingStars';
import { BRAND_PRIMARY } from '../constants/colors';

const Container = styled.div`
    display: flex;
    color: ${BRAND_PRIMARY};
    align-items: center;
`;

const PlaceDescription = styled.div`
    width: 60rem;
    font-size: 3.5rem;
    text-align: center;
    padding: 4.5rem 0;

    span {
        padding: 0 3rem;
    }

    span:first-child {
        display: inline-block;
        width: 35rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span:first-child {
        font-weight: bold;
    }
`;

const RatingStarsContainer = styled.div`
    display: flex;
`;

export const PlaceRating = ({ title, type, rating }) => (
    <Container>
        <PlaceDescription>
            <span>{title}</span>
            {'|'}
            <span>{type}</span>
        </PlaceDescription>
        <RatingStarsContainer>
            <RatingStars rating={rating} />
        </RatingStarsContainer>
    </Container>
);
