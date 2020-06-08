import GooglePlacesAutocomplete from "../../../components/realestate/GooglePlacesAutocomplete";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
/*
const geoCodingService = { current: null };
*/

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
    const [photo, setPhoto] = useState(null);

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

    /*
    const fetchReverseGeocoding = React.useMemo(
        () =>
            throttle((request, callback) => {
                geoCodingService.current.geocode(request, callback);
            }, 200),
        [],
    );

    function isPlaceMatchingLocation() {
        return location && place && location.latitude === place.geometry.location.lat() && location.longitude === place.geometry.location.lng();
    }

    React.useEffect(() => {
        if (!geoCodingService.current && window.google && map) {
            geoCodingService.current = new window.google.maps.Geocoder(map);
        }
        if (!geoCodingService.current) {
            return undefined;
        }
        if(location && location.latitude && location.longitude && !isPlaceMatchingLocation()) {
            fetchReverseGeocoding({
                location: {
                    lat: parseFloat(location.latitude),
                    lng: parseFloat(location.longitude),
                },
            }, (results, status) => {
                console.error(results);
                if (status === 'OK') {
                    if (results[0]) {
                        setPlace(results[0]);
                    }
                }
            });
        }
    }, [fetchReverseGeocoding, location, isPlaceMatchingLocation]);
    */
    React.useEffect(() => {
        if (!placesService.current && window.google && map) {
            placesService.current = new window.google.maps.places.PlacesService(map);
        }
        if (!placesService.current) {
            return undefined;
        }
        if(place) {
            fetchPlaceDetails({
                placeId: place.place_id,
                fields: ['geometry', 'photos', 'vicinity', 'address_component']
            }, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    console.error(place);
                    const latitude = place.geometry.location.lat();
                    const longitude = place.geometry.location.lng();
                    const district = place.address_components
                    if(place.photos && place.photos.length > 0) {
                        setPhoto(place.photos[0]);
                    } else {
                        setPhoto(null);
                    }
                    setLocation({latitude, longitude});
                }
            });
        }
    }, [map, place, fetchPlaceDetails, setLocation]);

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
        {canUseGeolocation && <Button
            className={classes.locationButton}
            variant="contained"
            color="default"
            size={"large"}
            fullWidth
            onClick={getGeolocation}>or use device location
        </Button>}
        {(location && location.latitude && location.longitude)&&<Typography variant='body1'>{formatCoordinates(location.latitude)}° N, {formatCoordinates(location.longitude)}° E</Typography>}
        {photo && <img alt='property' src={photo.getUrl()} />}
    </div>)

}