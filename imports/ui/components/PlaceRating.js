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
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props => (props.descriptionWidth ? `width: ${props.descriptionWidth}` : '')};

    span {
        padding-right: 3rem;
        display: inline-block;
        max-width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span:first-child {
        font-weight: bold;
    }

    span:last-child {
        padding-left: 3rem;
    }
`;

const RatingStarsContainer = styled.div`
    display: flex;
    white-space: nowrap;
`;

export const PlaceRating = ({ title, type, rating, descriptionWidth }) => (
    <Container>
        <PlaceDescription descriptionWidth={descriptionWidth}>
            <span>{title}</span>
            {'|'}
            <span>{type}</span>
        </PlaceDescription>
        <RatingStarsContainer>
            <RatingStars rating={rating} />
        </RatingStarsContainer>
    </Container>
);
