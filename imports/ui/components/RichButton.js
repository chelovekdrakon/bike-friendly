import React from 'react';
import styled from 'styled-components';
import { BRAND_PRIMARY } from '../constants/colors';

const colorsByTheme = {
    dark: 'white',
    light: BRAND_PRIMARY,
};

const _RichButton = styled.div`
    padding: ${props => (props.small ? 1 : 2.5)}rem 10rem;
    text-transform: uppercase;
    font-size: 2.5rem;
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease-in;
    background: linear-gradient(to bottom, transparent, transparent);

    &:hover {
        border-color: transparent;
        background: linear-gradient(to bottom, #569522, #c3b610);
        color: white;
    }

    &:active {
        background: linear-gradient(to bottom, #e3c009, #e3c009);
        transform: scale(1.1, 1.1);
    }
`;

export const RichButton = ({ text, onClick, small, theme = 'dark' }) => (
    <_RichButton onClick={onClick} small={small} color={colorsByTheme[theme]}>
        {text}
    </_RichButton>
);
