import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

import { ImageCover } from '../components/ImageConver';
import { PlaceRating } from '../components/PlaceRating';
import { WithIcon } from '../components/WithIcon';
import { BRAND_PRIMARY } from '../constants/colors';
import { page } from '../hocs/page';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const PlacePicturesSection = styled.div`
    height: 60vh;
    display: flex;

    div {
        flex: 1;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        height: 70vh;
    }
`;

const PlaceInfoSection = styled.div`
    padding: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 700px) {
        padding: 2rem;
    }
`;

const PlaceInfoContainer = styled.div`
    max-width: 70rem;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        max-width: 100%;
    }
`;

const InfoRow = styled.div`
    display: flex;
    padding: 2rem 0;

    font-size: 3.5rem;

    a {
        color: ${BRAND_PRIMARY};
        text-decoration: none;
    }

    div {
        margin-right: 3.5rem;
    }

    ${props => (props.singleLine ? `flex-basis: 100%` : '')};
`;

const SocialLinkContainer = styled.a`
    font-size: 4rem;
    color: ${BRAND_PRIMARY};
    text-decoration: none;
    display: inline-block;
    width: 4rem;
    margin-right: 2rem;
    text-align: center;

    &:visited {
        color: ${BRAND_PRIMARY};
    }
`;

const SocialLink = ({ name, link }) => (
    <SocialLinkContainer href={link}>
        <Icon name={name} className="fab" />
    </SocialLinkContainer>
);

export const PlacePage = page(() => (
    <Container>
        <PlacePicturesSection>
            <ImageCover src="images/place_pic_1.png" />
            <ImageCover src="images/place_pic_2.png" />
        </PlacePicturesSection>

        <PlaceInfoSection>
            <PlaceInfoContainer>
                <InfoRow singleLine>
                    <PlaceRating title="Cafe Madrid Rio" type="Shopping mall" rating={5} />
                </InfoRow>
                <InfoRow singleLine>
                    <WithIcon icon="globe">
                        <a href="www.shoppingmallmadrid.com">www.shoppingmallmadrid.com</a>
                    </WithIcon>
                </InfoRow>

                <InfoRow singleLine>
                    <WithIcon icon="location-arrow">Madrid, Santa rose str., 15874, Spain</WithIcon>
                </InfoRow>

                <InfoRow>
                    <WithIcon icon="clock-o">09:00 - 18:00</WithIcon>
                </InfoRow>
                <InfoRow>
                    <WithIcon icon="cutlery">09:00 - 18:00</WithIcon>
                </InfoRow>

                <InfoRow singleLine>
                    <WithIcon icon="mobile">+375 29 452 59 63</WithIcon>
                </InfoRow>

                <InfoRow singleLine>
                    <SocialLink name="facebook-official" link="https://facebook.com" />
                    <SocialLink name="twitter" link="https://facebook.com" />
                    <SocialLink name="instagram" link="https://facebook.com" />
                </InfoRow>
            </PlaceInfoContainer>
        </PlaceInfoSection>
    </Container>
));
