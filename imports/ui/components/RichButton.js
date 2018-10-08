import React from 'react';
import styled from 'styled-components';

const _RichButton = styled.div`
    padding: ${props => (props.small ? 1 : 2.5)}rem 10rem;
    text-transform: uppercase;
    font-size: 2.5rem;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease-in;
    background: linear-gradient(to bottom, transparent, transparent);

    &:hover {
        border-color: transparent;
        background: linear-gradient(to bottom, #569522, #c3b610);
    }

    &:active {
        background: linear-gradient(to bottom, #e3c009, #e3c009);
        transform: scale(1.1, 1.1);
    }
`;

export const RichButton = ({ text, onClick, small }) => (
    <_RichButton onClick={onClick} small={small}>
        {text}
    </_RichButton>
);
