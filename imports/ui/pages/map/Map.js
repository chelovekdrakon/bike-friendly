import React from 'react';
import { compose, withProps } from "recompose"
import PropTypes from 'prop-types';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

import { Meteor } from 'meteor/meteor';

import styled from 'styled-components';

const Div = styled.div`
    background-color: white;
`;

const MapPage = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));
  

MapPage.defaultProps = {
    
};

MapPage.propTypes = {
    
};

export default MapPage;