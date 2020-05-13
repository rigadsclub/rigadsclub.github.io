import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const HOUSE_TYPES = [
    {label: 'Kieģeļu-paneļu', value: 'Brick-Panel'},
    {label: 'Lielpaneļu', value: 'Panel'},
    {label: 'Koka', value: 'Wood'},
    {label: 'Mūra', value: 'Masonry'},
    {label: 'Kieģeļu-paneļu', value: 'Brick'},
    {label: 'Paneļu-kieģelu', value: 'Panel-Brick'},
]

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        width: '100%',
        textAlign: 'left',
        margin: 5,
        padding: 0,
    },
}));

export function HouseTypeSelect() {
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel>House type</InputLabel>
            <Select
                value={type}
                onChange={handleChange}
                label='House type'
            >
                {HOUSE_TYPES.map(t => <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}