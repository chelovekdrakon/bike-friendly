import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

import { BRAND_PRIMARY } from '../constants/colors';

const Label = styled.div`
    display: flex;
    color: ${BRAND_PRIMARY};
    align-items: center;
    ${props => (props.iconSize ? `font-size: ${props.iconSize}` : '')};

    span {
        display: inline-block;
        width: ${props => (props.iconSize ? props.iconSize : '3.5rem')};
        margin-right: ${props => props.iconMargin || '3.5rem'};
        text-align: center;
    }
`;

export const WithIcon = ({ icon, iconSize, iconMargin, children }) => (
    <Label iconMargin={iconMargin} iconSize={iconSize}>
        <Icon name={icon} />
        {children}
    </Label>
);
