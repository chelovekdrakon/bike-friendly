import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

import { BRAND_PRIMARY } from '../constants/colors';

const Label = styled.div`
    display: flex;
    color: ${BRAND_PRIMARY};
    align-items: center;

    span {
        display: inline-block;
        width: 3.5rem;
        margin-right: 2.5rem;
        text-align: center;
    }
`;

export const WithIcon = ({ icon, children }) => (
    <Label>
        <Icon name={icon} />
        {children}
    </Label>
);
