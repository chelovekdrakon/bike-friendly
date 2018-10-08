import React from 'react';
import styled from 'styled-components';

import { BRAND_PRIMARY } from '../constants/colors';
import { Logo } from './Logo';
import { SocialLink } from './SocialLink';

const Container = styled.div`
    color: white;
    padding: 15rem 3rem;
    background-color: ${BRAND_PRIMARY};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterTitle = styled.h4`
    font-weight: normal;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin: 0;
`;

const FooterSubtitle = styled.h5`
    font-size: 2.2rem;
    margin: 0;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11rem 0;
`;

const FooterContentItem = styled.div`
    padding: 1rem 4rem;
`;

const Contacts = styled.div`
    text-align: center;
    width: 200px;

    h6 {
        text-decoration: underline;
        font-size: 2rem;
        margin-top: 0;
        font-weight: normal;
        margin-bottom: 2rem;
    }

    p {
        margin: 0;
    }
`;

const LogoContainer = styled.div`
    width: 175px;
`;

const SocialLinks = styled.div`
    display: flex;
`;

const Copyright = styled.div`
    span {
        margin: 0 1rem;
    }
`;

export const Footer = () => (
    <Container>
        <FooterTitle>AL TEATRO, A CENAR, TUS COMPRAS… SIEMPRE EN BICI </FooterTitle>
        <FooterSubtitle>(aparcamiento seguro, descuentos entre otras muchas ventajas)</FooterSubtitle>
        <FooterContent>
            <FooterContentItem>
                <LogoContainer>
                    <Logo size="large" />
                </LogoContainer>
            </FooterContentItem>

            <FooterContentItem>
                <Contacts>
                    <h6>About us</h6>
                    <p>Madrid</p>
                    <p>Costa Rica str.</p>
                    <p>21/4589</p>
                    <p>+375 29 741 85 96</p>
                </Contacts>
            </FooterContentItem>

            <FooterContentItem>
                <SocialLinks>
                    <SocialLink name="instagram" href="about:blank" />
                    <SocialLink name="facebook" href="about:blank" />
                    <SocialLink name="twitter" href="about:blank" />
                </SocialLinks>
            </FooterContentItem>
        </FooterContent>

        <Copyright>
            <span>Slow BiCi</span>
            <span>©</span>
            <span>All right reserved | 2018 </span>
        </Copyright>
    </Container>
);
