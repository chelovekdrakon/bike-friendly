import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    padding: 11rem 11rem 0 11rem;
    color: #3a8d27;
    flex: 1;

    @media (max-width: 700px) {
        padding: 6rem 6rem 0 6rem;
    }
`;

const InfoRow = styled.div`
    padding-bottom: 5rem;
    text-transform: uppercase;

    div {
        display: flex;
        justify-content: space-between;
        border-bottom: 3px dotted #ebf3e9;

        span:last-child {
            font-weight: bold;
        }
    }

    &:last-child {
        padding-bottom: 0;
    }
`;

export const ProfileInfo = ({ username, distance, favoritePlace, visitedPlace }) => (
    <Container>
        <InfoRow>
            <div>
                <span>Nombre de usuario:</span> <span>{username}</span>
            </div>
        </InfoRow>

        <InfoRow>
            <div>
                <span>Kilómetros rodados:</span> <span>{distance}</span>
            </div>
        </InfoRow>

        <InfoRow>
            <div>
                <span>Mis lugares favoritos:</span> <span>{favoritePlace}</span>
            </div>
        </InfoRow>

        <InfoRow>
            <div>
                <span>Lugares visitados:</span> <span>{visitedPlace}</span>
            </div>
        </InfoRow>
    </Container>
);
