import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: url(${props => props.background});
    flex: 1;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
`;

const TextContainer = styled.div`
    background: rgba(58, 141, 39, 0.85);
    padding: 6rem;
    opacity: ${props => props.opacity};
    transition: opacity 0.5s;

    h3 {
        margin-top: 0;
    }

    h3,
    p {
        text-align: center;
    }
`;

const Overlay = styled.div`
    opacity: ${props => (props.show ? 1 : 0)};
    background-color: rgba(0, 0, 0, 0.8);
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 0.5s;
`;

export const CarouselItem = ({ imageUrl, isActive, title, text }) => (
    <Container background={imageUrl}>
        <TextContainer opacity={isActive ? 1 : 0}>
            <h3>{title}</h3>
            <p>{text}</p>
        </TextContainer>

        <Overlay show={!isActive} />
    </Container>
);
