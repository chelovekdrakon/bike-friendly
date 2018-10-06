import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Div = styled.div`
    background-color: white;
`;


const Me = props => (
    <Div> Me </Div>
);

Me.defaultProps = {
    
};

Me.propTypes = {
    
};

export default Me;