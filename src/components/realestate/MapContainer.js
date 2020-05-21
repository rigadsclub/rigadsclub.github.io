import React, {useEffect, useState} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export function MapContainer(props) {
    return (
        <Map style={{width: '100%', height: '100%', position: 'relative'}} google={props.google} zoom={14} />
    );
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB_xFxo_VBEj2rI21-zA9WIDCsvAlhhaN0')
})(MapContainer)