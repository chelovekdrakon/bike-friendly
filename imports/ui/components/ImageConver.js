import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
    background: url(${props => props.src});
    background-size: cover;
    background-position: 50% 50%;
    flex: 1;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

export const ImageCover = ({ src, ...rest }) => <Preview src={src} {...rest} />;
