import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LogoImg = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
`;

export const Logo = () => (
    <Link to="/">
        <LogoImg src="https://via.placeholder.com/80x80" />
    </Link>
);
