import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;
const Header = styled.div``;
const Main = styled.div``;
const Footer = styled.div``;


const Home = props => (
    <Body>
        <Header>Hellw</Header>
        <Main>My name is BIKE-FRIENDLY</Main>
        <Footer>(c) Bike-friendly</Footer>
    </Body>
);

Home.defaultProps = {
    
};

Home.propTypes = {
    
};

export default Home;