import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import {HouseSeriesSelect} from "../../components/realestate/HouseSeriesSelect";
import {HouseTypeSelect} from "../../components/realestate/HouseTypeSelect";
import CircularProgress from '@material-ui/core/CircularProgress';
import Step from "../../components/realestate/Step";
import EnterLocation from "./demo/EnterLocation";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';
import EuroSharpIcon from '@material-ui/icons/EuroSharp';
import {RealEstateFormControl} from "../../components/realestate/RealEstateFormControl";
import RigaRealEstateMap from "./RigaRealEstateMap";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    header : {
        textAlign: 'left',
    },
    controls: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'center',
        flexWrap: 'wrap'
    },
    textField: {
        width: '100%',
        margin: 0,
    },
    predictions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    prediction: {
        width: '100%',
        margin: '15px',
        textAlign: 'center',
    },
    ai: {
        margin: '8px',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/avatar/ai.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
}));

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
});

export default function RigaRealEstateDemo() {
    const classes = useStyles();
    const [map, setMap] = useState(null);
    const [location, setLocation] = useState(null);
    const [area, setArea] = useState(50);
    const [floor, setFloor] = useState(5);
    const [rooms, setRooms] = useState(2);
    const [totalFloors, setTotalFloors] = useState(9);
    const [condition] = useState('All, amenities');
    const [houseType, setHouseType] = useState('Panel');
    const [houseSeria, setHouseSeria] = useState('119.');
    const [district, setDistrict] = useState('Purvciems');
    const [loading, setLoading] = useState(false);
    const [predictions, setPredictions] = useState(null);
    const [error, setError] = useState(null);

    const allFieldsAreComplete = () => {
        return area && floor && rooms && totalFloors
            && condition && houseType && houseSeria && district
            && location && location.latitude && location.longitude;
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
        'lat': [location.latitude],
        'lon': [location.longitude],
    });

    useEffect(() => {
        if(allFieldsAreComplete()) {
            setError(null);
            setLoading(true);
            setPredictions(null);
            fetch('https://api.rigadsclub.com/v1/models/riga:predict', {
                    method: 'POST',
                    body: JSON.stringify({
                        instances: [
                            createInputInstance('For sale'),
                            createInputInstance('For rent'),
                        ]
                    }),
                }
            )
                .then(res => {
                    return res.json();
                })
                .then(result => {
                    setPredictions(result.predictions);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [
        area,
        floor,
        rooms,
        totalFloors,
        condition,
        houseType,
        houseSeria,
        district,
        location,
        setPredictions]);
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="subtitle1" gutterBottom>
                    Complete few fields below to get rent and sale price estimation for any property located in Riga, Latvia:
                </Typography>
            </div>
            <Grid container>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Step icon={<LocationOnIcon/>} title={'Real estate location'} complete={location}>
                        <EnterLocation map={map} location={location} setLocation={setLocation} />
                    </Step>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Step icon={<HomeIcon/>} title={"House properties"} complete={houseSeria && houseType && totalFloors}>
                        <HouseSeriesSelect value={houseSeria} onChange={event => setHouseSeria(event.target.value)} />
                        <HouseTypeSelect value={houseType} onChange={event => setHouseType(event.target.value)} />
                        <RealEstateFormControl>
                            <TextField
                                className={classes.textField}
                                label="Floor count"
                                type="number"
                                variant="outlined"
                                value={totalFloors.toString()}
                                onChange={event => setTotalFloors(parseInt(event.target.value))}
                            />
                        </RealEstateFormControl>
                    </Step>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Step icon={<FormatLineSpacingIcon />} title={"Flat properties"} complete={floor && area && rooms}>
                        <RealEstateFormControl variant='outlined'>
                            <TextField
                                className={classes.textField}
                                label="Floor"
                                type="number"
                                variant="outlined"
                                value={floor.toString()}
                                onChange={event => setFloor(parseInt(event.target.value))}
                            />
                        </RealEstateFormControl>
                        <RealEstateFormControl variant='outlined'>
                            <TextField
                                className={classes.textField}
                                label="Area"
                                type="number"
                                variant="outlined"
                                value={area.toString()}
                                onChange={event => setArea(parseInt(event.target.value))}
                            />
                        </RealEstateFormControl>
                        <RealEstateFormControl variant='outlined'>
                            <TextField
                                className={classes.textField}
                                label="Room count"
                                type="number"
                                variant="outlined"
                                value={rooms.toString()}
                                onChange={event => setRooms(parseInt(event.target.value))}
                            />
                        </RealEstateFormControl>
                    </Step>
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Step icon={<EuroSharpIcon />} title={"Prediction"} hideCompleteIcon>
                        {loading && <CircularProgress />}
                        {error && <p>{error}</p>}
                        {predictions && <div className={classes.predictions}>
                            <div className={classes.prediction}>
                                For sale:
                                <h2 style={{margin: 3}}>{formatter.format(predictions[0][0])}</h2>
                            </div>
                            <div className={classes.prediction}>
                                For rent:
                                <h2 style={{margin: 3}}>{formatter.format(predictions[1][0])}</h2>
                            </div>
                        </div>}
                    </Step>
                </Grid>
            </Grid>
            <RigaRealEstateMap map={map} setMap={setMap} location={location} setLocation={setLocation} />
        </div>
    );
}