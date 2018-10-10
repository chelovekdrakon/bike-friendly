import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Section } from '../../components/Section';
import { RichButton } from '../../components/RichButton';
import { Carousel } from '../../components/Carousel';
import { CarouselItem } from '../../components/Carousel/CarouselItem';
import { page } from '../../hocs/page';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const SectionContent = styled(Section)`
    max-width: 960px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginButtonContainer = styled.div`
    padding-top: 6rem;
`;

const Home = page(({ history, user }) => (
    <Body>
        <Section padding={'20rem 1rem'} background="images/landing_back_1.png">
            <SectionContent>
                <h1>SLOWBiCi</h1>

                <p>
                    ¿Alguna vez has pensado en las ventajas de ir en bici por tu ciudad? Es el medio de transporte más
                    rápido y evitarás los atascos y los retrasos. Supone un importante ahorro de dinero en gasolina,
                    transporte, parkings y horas de gimnasio. Es la manera perfecta de mantenerse en forma aprovechando
                    los trayectos diarios. Todo esto convierte tu ciudad en un lugar menos contaminado y más habitable.
                </p>

                {!user ? (
                    <LoginButtonContainer>
                        <RichButton
                            text="INICIAR"
                            onClick={() => {
                                history.push('/login');
                            }}
                        />
                    </LoginButtonContainer>
                ) : null}
            </SectionContent>
        </Section>

        <Section background="images/landing_back_2.png" onClick={() => history.push('/map')} />

        <Section>
            <Carousel>
                <CarouselItem
                    imageUrl="images/carousel_img_1.png"
                    title="PARECE UN SUEÑO PERO ES POSIBLE"
                    text="Cientos de madrileños ya van en bici a trabajar:
                    ahorrando dinero, sin contaminar,
                    y ganando en salud
                    "
                >
                    <RichButton text="Join" />
                </CarouselItem>
                <CarouselItem
                    imageUrl="images/carousel_img_2.png"
                    title="PARECE UN SUEÑO PERO ES POSIBLE"
                    text="Cientos de madrileños ya van en bici a trabajar:
                    ahorrando dinero, sin contaminar,
                    y ganando en salud
                    "
                >
                    <RichButton text="Donate" />
                </CarouselItem>
                <CarouselItem
                    imageUrl="images/carousel_img_3.png"
                    title="PARECE UN SUEÑO PERO ES POSIBLE"
                    text="Cientos de madrileños ya van en bici a trabajar:
                    ahorrando dinero, sin contaminar,
                    y ganando en salud
                    "
                >
                    <RichButton text="Shop" />
                </CarouselItem>
            </Carousel>
        </Section>
    </Body>
));

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
