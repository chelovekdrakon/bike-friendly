import React from 'react';
import styled from 'styled-components';

import { RatingStars } from './RatingStars';
import { BRAND_PRIMARY } from '../constants/colors';

const Container = styled.div`
    display: flex;
    color: ${BRAND_PRIMARY};
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
        flex: 1;
        justify-content: center;
    }
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

        @media (max-width: 700px) {
            text-align: center;
            padding-right: 1rem;
        }
    }

    span:first-child {
        font-weight: bold;
    }

    span:last-child {
        padding-left: 3rem;

        @media (max-width: 700px) {
            padding-right: 1rem;
        }
    }

    @media (max-width: 700px) {
        width: auto;
        padding-bottom: 2rem;

        white-space: normal;
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
