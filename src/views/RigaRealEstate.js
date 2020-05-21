import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import DistrictAutocomplete from "../components/realestate/DistrictAutocomplete";
import {HouseSeriesSelect} from "../components/realestate/HouseSeriesSelect";
import {HouseTypeSelect} from "../components/realestate/HouseTypeSelect";
import {ConditionSelect} from "../components/realestate/ConditionSelect";
import CircularProgress from '@material-ui/core/CircularProgress';
import AddressAutocomplete from "../components/realestate/AddressAutocomplete";

const useStyles = makeStyles(() => ({
    controls: {
        width: '100%',
        margin: '0 auto',
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'
    },
    textField: {
        width: '100%',
        margin: 7,
    },
    prediction: {
        margin: 10,
        padding: 0,
    },
}));

const GOOGLE_MAP_API_KEY = 'AIzaSyB_xFxo_VBEj2rI21-zA9WIDCsvAlhhaN0';

export default function RigaRealEstate() {
    const classes = useStyles();
    const [latitude, setLatitude] = useState(56.967406);
    const [longitude, setLongitude] = useState(24.186564);
    const [area, setArea] = useState(50);
    const [floor, setFloor] = useState(5);
    const [rooms, setRooms] = useState(2);
    const [totalFloors, setTotalFloors] = useState(9);
    const [condition, setCondition] = useState('All amenities');
    const [houseType, setHouseType] = useState('Panel');
    const [houseSeria, setHouseSeria] = useState('119.');
    const [district, setDistrict] = useState('Purvciems');
    const [loading, setLoading] = useState(false);
    const [predictions, setPredictions] = useState(null);

    const allFieldsAreComplete = () => {
        return area && floor && rooms && totalFloors
            && condition && houseType && houseSeria && district
            && latitude && longitude;
    }

    const createInputInstance = operation => ({
        'op_type': [operation],
        'district': [district],
        'street': [''],
        'rooms': [rooms],
        'area': [area],
        'floor': [floor],
        'total_floors': [totalFloors],
        'house_seria': [houseSeria],
        'house_type': [houseType],
        'condition': [condition],
        'lat': [latitude],
        'lon': [longitude],
    });

    useEffect(() => {
        if(allFieldsAreComplete()) {
            setLoading(true);
            fetch("http://localhost:8501/v1/models/riga:predict", {
                    method: "POST",
                    body: JSON.stringify({
                        instances: [
                            createInputInstance('For sale'),
                            createInputInstance('For rent'),
                        ]
                    }),
                }
            )
                .then(res => res.json())
                .then(result => {
                    setPredictions(result.predictions);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                });
        }
    }, [area, floor, rooms, totalFloors, condition, houseType, houseSeria, district, latitude, longitude,
        setPredictions]);

    return (
        <div>
            <h3>Riga real estate price prediction with AI</h3>
            <AddressAutocomplete />
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=600x300&maptype=roadmap
            &markers=color:red%7C${latitude},${longitude}&key=${GOOGLE_MAP_API_KEY}`} />
            <div className={classes.controls}>
                <DistrictAutocomplete value={district} onChange={(_event, value)=> setDistrict(value)} />
                <TextField
                    className={classes.textField}
                    label="Area"
                    type="number"
                    variant="outlined"
                    value={area}
                    onChange={event => setArea(Number(event.target.value))}
                />
                <TextField
                    className={classes.textField}
                    label="Room count"
                    type="number"
                    variant="outlined"
                    value={rooms}
                    onChange={event => setRooms(Number(event.target.value))}
                />
                <HouseSeriesSelect value={houseSeria} onChange={event => setHouseSeria(event.target.value)} />
                <HouseTypeSelect value={houseType} onChange={event => setHouseType(event.target.value)} />
                <ConditionSelect value={condition} onChange={event => setCondition(event.target.value)} />
                <TextField
                    className={classes.textField}
                    label="Floor"
                    type="number"
                    variant="outlined"
                    value={floor}
                    onChange={event => setFloor(Number(event.target.value))}
                />
                <TextField
                    className={classes.textField}
                    label="Total floor count"
                    type="number"
                    variant="outlined"
                    value={totalFloors}
                    onChange={event => setTotalFloors(Number(event.target.value))}
                />
                <TextField
                    className={classes.textField}
                    label="Latitude"
                    type="number"
                    variant="outlined"
                    value={latitude}
                    onChange={event => setLatitude(Number(event.target.value))}
                />
                <TextField
                    className={classes.textField}
                    label="Longitude"
                    type="number"
                    variant="outlined"
                    value={longitude}
                    onChange={event => setLongitude(Number(event.target.value))}
                />
                {loading && <CircularProgress />}
                {predictions && <div>
                    <h3 className={classes.prediction}>AI is suggesting:</h3>
                    <h4 className={classes.prediction}>Sale price: {predictions[0][0].toFixed(2)} EUR</h4>
                    <h4 className={classes.prediction}>Rent price: {predictions[1][0].toFixed(2)} EUR</h4>
                </div>}
            </div>
        </div>
    );
}