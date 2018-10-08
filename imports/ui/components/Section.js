import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.padding};
    height: 100vh;
    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: 50% 50%;
    color: white;

    h1 {
        font-size: 10rem;
        margin-top: 0;
    }

    p {
        font-size: 2.5rem;
    }
`;
