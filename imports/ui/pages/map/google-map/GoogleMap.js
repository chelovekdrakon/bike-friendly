import React from 'react';
import _ from 'lodash';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';

import styled from 'styled-components';

const SearchInput = styled.input`
    border: 1px solid transparent;
    width: 240px;
    height: 32px;
    margin-top: 1rem;
    padding: 1.9rem;
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    outline: none;
    text-overflow: ellipsis;
`;

class _GoogleMap extends React.PureComponent {
    state = {
        markers: [],
        bound: null,
        center: {
            lat: 40.415033,
            lng: -3.723795,
        },
    };

    refMap = node => {
        this.map = node;
    };

    refSearchBox = node => {
        this.searchBox = node;
    };

    onPlacesChanged = () => {
        const places = this.searchBox.getPlaces();
        const bounds = new google.maps.LatLngBounds();

        places.forEach(place => {
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        const nextMarkers = places.map(place => ({
            position: place.geometry.location,
        }));

        const nextCenter = _.get(nextMarkers, '0.position', this.map.getCenter());

        this.setState({
            center: nextCenter,
            markers: nextMarkers,
        });
    };

    render() {
        return (
            <div style={this.props.containerStyles}>
                <GoogleMap ref={this.refMap} defaultZoom={13} defaultCenter={this.state.center}>
                    <SearchBox
                        ref={this.refSearchBox}
                        bounds={this.map ? this.map.getBounds() : null}
                        controlPosition={google.maps.ControlPosition.TOP_LEFT}
                        onPlacesChanged={this.onPlacesChanged}
                    >
                        <SearchInput type="text" placeholder="Search for places" />
                    </SearchBox>
                    {this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={{
                                lat: marker.position.lat(),
                                lng: marker.position.lng(),
                            }}
                        />
                    ))}
                </GoogleMap>
            </div>
        );
    }
}

const MapPage = withScriptjs(withGoogleMap(_GoogleMap));

MapPage.defaultProps = {};

MapPage.propTypes = {};

export default MapPage;
