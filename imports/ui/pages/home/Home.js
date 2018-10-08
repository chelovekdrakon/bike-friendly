import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { RichButton } from '../../components/RichButton';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.padding};
    height: 100vh;
    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: 50% 50%;
    color: white;

    h1 {
        font-size: 10rem;
        margin-top: 0;
    }

    p {
        font-size: 2.5rem;
    }
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

const Home = () => (
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

                <LoginButtonContainer>
                    <RichButton text="LOG IN" onClick={() => {}} />
                </LoginButtonContainer>
            </SectionContent>
        </Section>

        <Section background="images/landing_back_2.png" />
    </Body>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
