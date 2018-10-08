import React from 'react';

import styled from 'styled-components';

const Pic = styled.div`
    background: url(${props => props.src});
    background-size: cover;
    background-position: 50% 50%;
    flex: 1;
    margin-right: ${props => props.margin}%;

    &:last-child {
        margin: 0;
    }
`;

export const ProfileGalleryPicture = ({ src, margin }) => <Pic src={src} margin={margin} />;
