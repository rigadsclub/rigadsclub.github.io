import React, {useEffect, useState} from 'react';
import {OperationSelect} from "../components/realestate/OperationSelect";
import TextField from '@material-ui/core/TextField';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import DistrictAutocomplete from "../components/realestate/DistrictAutocomplete";
import {HouseSeriesSelect} from "../components/realestate/HouseSeriesSelect";
import {HouseTypeSelect} from "../components/realestate/HouseTypeSelect";
import {ConditionSelect} from "../components/realestate/ConditionSelect";

const MODEL_URL = `${process.env.PUBLIC_URL}/models/model.json`;

const useStyles = makeStyles((theme) => ({
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
}));

export default function Projects() {
    const classes = useStyles();
    const [model, setModel] = useState(null);
    useEffect(async () => {
        const m = await loadGraphModel(MODEL_URL);
        setModel(m);
        console.log('Model loaded');
    });
    return (
        <div>
            <h3>Riga real estate price prediction with AI</h3>
            <div className={classes.controls}>

                <OperationSelect />
                <DistrictAutocomplete />
                <TextField
                    className={classes.textField}
                    label="Area"
                    type="number"
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    label="Room count"
                    type="number"
                    variant="outlined"
                />
                <HouseSeriesSelect />
                <HouseTypeSelect />
                <ConditionSelect />
                <TextField
                    className={classes.textField}
                    label="Floor"
                    type="number"
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    label="Total floor count"
                    type="number"
                    variant="outlined"
                />
                <Button variant="contained" color="primary">
                    Predict
                </Button>
            </div>
        </div>
    );
}