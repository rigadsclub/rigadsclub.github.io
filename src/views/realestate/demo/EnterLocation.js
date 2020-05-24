import GooglePlacesAutocomplete from "../../../components/realestate/GooglePlacesAutocomplete";
import Button from '@material-ui/core/Button';
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useConfig} from "../../../components/providers/ConfigProvider";

const useStyles = makeStyles(() => ({
    locationContainer: {
        width: '100%',
        textAlign: 'center',
    },
    locationButton: {
        marginTop: '10px',
    },
}));
/**
 * @param onChange callback will be invoked with {latitude, latitude} once location selected
 * @returns {latitude, latitude}
 * @constructor
 */
export default function EnterLocation({location, setLocation}) {
    const config = useConfig();
    const classes = useStyles({location, config});
    const [canUseGeolocation, setCanUseGeolocation] = useState(false);
    const [place, setPlace] = useState(null);

    React.useEffect(() => {
        if (navigator.geolocation) {
            setCanUseGeolocation(true);
        }
    }, [canUseGeolocation, setCanUseGeolocation]);


    function getGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onPositionObtained);
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
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
        {(location.latitude && location.longitude)&&<p>{location.latitude}° N, {location.longitude}° E</p>}
        {(location.latitude && location.longitude)&&<img src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}
            &zoom=13&size=300x300&maptype=roadmap
            &markers=color:red%7Clabel:%7C${location.latitude},${location.longitude}
            &key=${config.GOOGLE_MAP_API_KEY}`}
        />}
    </div>)

}