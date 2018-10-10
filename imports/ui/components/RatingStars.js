import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

const Container = styled.div`
    width: 19rem;
    color: #d80027;
    font-size: 3rem;
`;

export const RatingStars = ({ rating }) => (
    <Container>
        {Array.from({ length: rating }).map((_, index) => (
            <Icon name="star" key={index} />
        ))}
    </Container>
);
