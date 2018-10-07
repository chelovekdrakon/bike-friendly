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
      defaultZoom={13}
      defaultCenter={{ lat: 40.415033, lng: -3.723795 }}
      onClick={props.onPlacePick}
    >
      <Marker
        position={{ lat: 40.415033, lng: -3.723795 }}
      />
    </GoogleMap>
  ));
  

MapPage.defaultProps = {
    
};

MapPage.propTypes = {
    
};

export default MapPage;