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
`;

const PlaceInfoSection = styled.div`
    padding: 13vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PlaceInfoContainer = styled.div`
    max-width: 70rem;
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
                <InfoRow>
                    <PlaceRating title="Cafe Madrid Rio" type="Shopping mall" rating={5} />
                </InfoRow>
                <InfoRow>
                    <WithIcon icon="globe">
                        <a href="www.shoppingmallmadrid.com">www.shoppingmallmadrid.com</a>
                    </WithIcon>
                </InfoRow>

                <InfoRow>
                    <WithIcon icon="location-arrow">Madrid, Santa rose str., 15874, Spain</WithIcon>
                </InfoRow>

                <InfoRow>
                    <WithIcon icon="clock-o">09:00 - 18:00</WithIcon>
                    <WithIcon icon="cutlery">09:00 - 18:00</WithIcon>
                </InfoRow>

                <InfoRow>
                    <WithIcon icon="mobile">+375 29 452 59 63</WithIcon>
                </InfoRow>
                <SocialLink name="facebook-official" link="https://facebook.com" />

                <SocialLink name="twitter" link="https://facebook.com" />

                <SocialLink name="instagram" link="https://facebook.com" />
                <InfoRow />
            </PlaceInfoContainer>
        </PlaceInfoSection>
    </Container>
));
