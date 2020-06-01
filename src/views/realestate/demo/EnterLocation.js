import GooglePlacesAutocomplete from "../../../components/realestate/GooglePlacesAutocomplete";
import Button from '@material-ui/core/Button';
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useConfig} from "../../../components/providers/ConfigProvider";
import throttle from "lodash/throttle";

const useStyles = makeStyles(() => ({
    locationContainer: {
        width: '100%',
        textAlign: 'center',
    },
    locationButton: {
        marginTop: '10px',
    },
}));

const placesService = { current: null };

/**
 * @param onChange callback will be invoked with {latitude, latitude} once location selected
 * @returns {latitude, latitude}
 * @constructor
 */
export default function EnterLocation({location, setLocation, map}) {
    const config = useConfig();
    const classes = useStyles({location, config});
    const [canUseGeolocation, setCanUseGeolocation] = useState(false);
    const [place, setPlace] = useState(null);
    const [photoReference, setPhotoReference] = useState(null);

    React.useEffect(() => {
        if (navigator.geolocation) {
            setCanUseGeolocation(true);
        }
    }, [canUseGeolocation, setCanUseGeolocation]);

    const fetchPlaceDetails= React.useMemo(
        () =>
            throttle((request, callback) => {
                placesService.current.getDetails(request, callback);
            }, 200),
        [],
    );

    React.useEffect(() => {
        if (!placesService.current && window.google && map) {
            placesService.current = new window.google.maps.places.PlacesService(map);
        }
        if (!placesService.current) {
            return undefined;
        }
        if(place) {
            fetchPlaceDetails({placeId: place.place_id, fields: ['geometry']}, (place, status) => {
                if (status == window.google.maps.places.PlacesServiceStatus.OK) {
                    const latitude = place.geometry.location.lat();
                    const longitude = place.geometry.location.lng();
                    setLocation({latitude, longitude});
                }
            });
        }
    }, [map, place, fetchPlaceDetails]);

    function getGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onPositionObtained);
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    function formatCoordinates(coordinate) {
        return Math.round(coordinate * 1e6) / 1e6;
    }
    function onPositionObtained(position) {
        setPlace(null);
        setLocation(position.coords); // {latitude, latitude}
    }

    return (<div className={classes.locationContainer}>
        <GooglePlacesAutocomplete
            value={place}
            setValue={place => {
                setPlace(place);
            }} />
        {canUseGeolocation && <><span style={{margin: '2px 0', fontSize: '12px'}}>or</span><Button
            className={classes.locationButton}
            variant="contained"
            color="default"
            size={"large"}
            fullWidth
            onClick={getGeolocation}>Use device location
        </Button></>}
        {(location && location.latitude && location.longitude)&&<p>{formatCoordinates(location.latitude)}° N, {formatCoordinates(location.longitude)}° E</p>}
    </div>)

}