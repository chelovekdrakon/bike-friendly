import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Div = styled.div`
    background-color: white;
`;


const NotFound = props => (
    <Div> Not Found </Div>
);

NotFound.defaultProps = {
    
};

NotFound.propTypes = {
    
};

export default NotFound;