import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const HOUSE_SERIES = [
    {label: 'Lietuviešu projekts', value: 'LT proj.'},
    {label: '602. sērija', value: '602.'},
    {label: 'Pirmskara māja', value: 'P. kara'},
    {label: 'Jaunbūve', value: 'Jaun.'},
    {label: 'Specprojects', value: 'Specpr.'},
    {label: 'Hruščova laika projekts', value: 'Hrušč.'},
    {label: '119. sērija', value: '119.'},
    {label: 'Mazģimeņu projekts', value: 'M. ģim.'},
    {label: 'Renovētā māja', value: 'Renov.'},
    {label: '103. sērija', value: '103.'},
    {label: 'Privātmāja', value: 'Priv. m.'},
    {label: '467. sērija', value: '467.'},
    {label: 'Staļina laika māja', value: 'Staļina'},
    {label: '104. sērija', value: '104.'},
    {label: 'Čehu projekts', value: 'Čehu pr.'},
];

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        width: '100%',
        textAlign: 'left',
        margin: 5,
        padding: 0,
    },
}));

export function HouseSeriesSelect() {
    const classes = useStyles();
    const [series, setSeries] = React.useState('');
    const handleChange = (event) => {
        setSeries(event.target.value);
    };

    return (
        <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel>House series</InputLabel>
            <Select
                value={series}
                onChange={handleChange}
                label='House series'
            >
                {HOUSE_SERIES.map(s => <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}