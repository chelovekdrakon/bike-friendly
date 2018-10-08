import React from 'react';
import styled from 'styled-components';

import { BRAND_PRIMARY } from '../constants/colors';
import { Logo } from './Logo';
import { SocialButton } from './SocialButton';

const Container = styled.div`
    color: white;
    padding: 3rem;
    background-color: ${BRAND_PRIMARY};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterTitle = styled.h4`
    text-decoration: underline;
    font-weight: normal;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const FooterContentItem = styled.div`
    padding: 1rem 4rem;
`;

const Contacts = styled.div`
    text-align: center;
    width: 200px;

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

export const Footer = () => (
    <Container>
        <FooterTitle>About us</FooterTitle>
        <FooterContent>
            <FooterContentItem>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
            </FooterContentItem>

            <FooterContentItem>
                <Contacts>
                    <p>Madrid</p>
                    <p>Costa Rica str.</p>
                    <p>21/4589</p>
                    <p>+375 29 741 85 96</p>
                </Contacts>
            </FooterContentItem>

            <FooterContentItem>
                <SocialLinks>
                    <SocialButton name="instagram" />
                    <SocialButton name="facebook" />
                    <SocialButton name="twitter" />
                </SocialLinks>
            </FooterContentItem>
        </FooterContent>
    </Container>
);
