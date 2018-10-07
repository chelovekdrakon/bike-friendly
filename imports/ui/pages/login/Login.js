import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Div = styled.div`
    background-color: white;
`;


const Login = ({ location: { isNew }}) => (
    isNew ? (
        <Div> Sign-up </Div>
    ) : (
        <Div> Login </Div>
    )
);
    

Login.defaultProps = {
    
};

Login.propTypes = {
    
};

export default Login;