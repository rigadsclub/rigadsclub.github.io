import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles} from "@material-ui/core/styles";

const DISTRICTS = ["Purvciems", "Ziepniekkalns", "centrs", "Ķengarags", "Teika", "Imanta", "Jugla", "Mangaļi", "Mežciems", "Maskavas priekšpilsēta", "Zolitūde", "Bolderāja", "Grīziņkalns", "Dreiliņi", "Pļavnieki", "Dzegužkalns", "Ķīpsala", "Krasta r-ns", "Klīversala","Vecmīlgrāvis", "Āgenskalns", "Zasulauks", "Mežaparks","Čiekurkalns", "Sarkandaugava", "Daugavgrīva", "Iļģuciems","Berģi", "Šķirotava", "Dārzciems", "Vecrīga", "Bieriņi", "Brekši","Kundziņsala", "Jaunciems", "Torņakalns", "Mangaļsala","Šampēteris-Pleskodāle", "Bukulti", "Voleri", "Vecdaugava","Aplokciems", "Katlakalns", "Kleisti", "Vecāķi", "Buļļi", "Jaunmīlgrāvis", "VEF"];

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        width: '100%',
        textAlign: 'left',
        margin: 5,
        padding: 0,
    },
}));

export default function DistrictAutocomplete({value, onChange}) {
    const classes = useStyles();
    return (
        <Autocomplete
            className={classes.formControl}
            freeSolo
            disableClearable
            options={DISTRICTS}
            value={value}
            onChange={onChange}
            fullWidth={true}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="District"
                    margin="none"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}
        />
    )
}