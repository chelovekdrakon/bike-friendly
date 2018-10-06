import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Div = styled.div`
    background-color: white;
`;


const Home = props => (
    <Div> Home </Div>
);

Home.defaultProps = {
    
};

Home.propTypes = {
    
};

export default Home;