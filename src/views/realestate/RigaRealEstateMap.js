import React, {createRef, useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useConfig} from "../../components/providers/ConfigProvider";

const useStyles = makeStyles({
    map: {
        width: '100%',
        height: '300px',
    },
});

export default function RigaRealEstateMap({map, setMap, location, setLocation}) {
    const classes = useStyles();
    const config = useConfig();
    const googleMapRef = createRef();
    const markersRef = useRef([]);

    React.useEffect(() => {
        if(window.google) {
            setMap(new window.google.maps.Map(googleMapRef.current, {
                center: {lat: config.RIGA_CENTER_LATITUDE, lng: config.RIGA_CENTER_LONGITUDE},
                zoom: 15,
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
            }));
        }
    }, [setMap, config.RIGA_CENTER_LATITUDE, config.RIGA_CENTER_LONGITUDE]);

    function clearMarkers(markers) {
        for (let m of markers) {
            m.setMap(null);
        }
    }
    React.useEffect(() => {
        if(location && location.latitude && location.longitude) {
            clearMarkers(markersRef.current);
            const marker = new window.google.maps.Marker({
                map: map,
                draggable: true,
                position: {lat: location.latitude, lng: location.longitude},
            });
            map.panTo(marker.getPosition());
            window.google.maps.event.addListener(marker, 'dragend', () => {
                const latitude = marker.getPosition().lat();
                const longitude = marker.getPosition().lng();
                setLocation({latitude, longitude});
            });
            markersRef.current.push(marker);
        }
    }, [location, setLocation]);
    return (
        <div ref={googleMapRef} className={classes.map}/>
    );
}