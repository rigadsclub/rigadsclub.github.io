import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {RealEstateFormControl} from "./RealEstateFormControl";

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

export function HouseSeriesSelect({value, onChange}) {
    return (
        <RealEstateFormControl variant='outlined'>
            <InputLabel>House series</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label='House series'
            >
                {HOUSE_SERIES.map(s => <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>)}
            </Select>
        </RealEstateFormControl>
    );
}