import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

const Container = styled.div`
    width: 19rem;
    color: #d80027;
`;

export const RatingStars = ({ rating }) => (
    <Container>
        {Array.from({ length: rating }).map((_, index) => (
            <Icon name="star" key={index} size="2x" />
        ))}
    </Container>
);
