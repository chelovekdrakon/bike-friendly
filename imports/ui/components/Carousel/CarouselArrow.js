import React from 'react';

import styled from 'styled-components';

const posToDirectionMap = {
    backward: 'left',
    forward: 'right',
};

const Container = styled.div`
    position: absolute;
    ${props => posToDirectionMap[props.direction]}: 0;
    width: 60px;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CarouselArrow = ({ direction, onClick }) => (
    <Container onClick={onClick} direction={direction}>
        <img src={`images/carousel_arrow_${direction}.png`} />
    </Container>
);
