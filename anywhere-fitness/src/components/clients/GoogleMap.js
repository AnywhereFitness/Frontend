import React from 'react'
import {Map, GoogleApiWrapper } from 'google-maps-react';
export default function GoogleMap() {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    return (
               <Map
              google={this.props.google}
              zoom={6}
              style={mapStyles}
              initialCenter={{ lat: 40.7128, lng: 74.0060}}
              />
    )
}
