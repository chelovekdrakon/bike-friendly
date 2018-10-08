import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LogoImg = styled.img`
    width: ${props => props.width};
`;

export const Logo = ({ size = 'small' }) => (
    <Link to="/">
        <LogoImg src={`images/logo_${size}.png`} width={size === 'large' ? '10.5rem' : '9.5rem'} />
    </Link>
);
