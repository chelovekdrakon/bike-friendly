import React from 'react';
import styled from 'styled-components';

const Pic = styled.div`
    background: url(${props => props.src});
    background-size: cover;
    background-position: 50% 50%;
    flex: 1;
    height: 100%;
    width: 100%;
`;

export const ProfilePic = ({ src }) => <Pic src={src} />;