import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Div = styled.div`
    background-color: white;
`;

const Profile = props => <Div> Profile </Div>;

Profile.defaultProps = {};

Profile.propTypes = {};

export default Profile;
