import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';
import { BRAND_ACCENT } from '../constants/colors';

const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
    border: 2px solid ${BRAND_ACCENT};
    color: ${BRAND_ACCENT};
    width: 38px;
    height: 38px;
    text-decoration: none;
`;

export const SocialLink = ({ name, href }) => (
    <Container href={href}>
        <Icon name={name} />
    </Container>
);
