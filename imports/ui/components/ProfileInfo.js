import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    padding: 11rem 11rem 0 11rem;
    color: #3a8d27;
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
                <span>User name:</span> <span>{username}</span>
            </div>
        </InfoRow>

        <InfoRow>
            <div>
                <span>Kilometers:</span> <span>{distance}</span>
            </div>
        </InfoRow>

        <InfoRow>
            <div>
                <span>Favrotie place:</span> <span>{favoritePlace}</span>
            </div>
        </InfoRow>

        <InfoRow>
            <div>
                <span>Visited place:</span> <span>{visitedPlace}</span>
            </div>
        </InfoRow>
    </Container>
);
