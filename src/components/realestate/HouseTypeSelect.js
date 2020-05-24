import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {RealEstateFormControl} from "./RealEstateFormControl";

const HOUSE_TYPES = [
    {label: 'Kieģeļu-paneļu', value: 'Brick-Panel'},
    {label: 'Lielpaneļu', value: 'Panel'},
    {label: 'Koka', value: 'Wood'},
    {label: 'Mūra', value: 'Masonry'},
    {label: 'Kieģeļu-paneļu', value: 'Brick'},
    {label: 'Paneļu-kieģelu', value: 'Panel-Brick'},
]

export function HouseTypeSelect({value, onChange}) {
    return (
        <RealEstateFormControl variant='outlined'>
            <InputLabel>House type</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label='House type'
            >
                {HOUSE_TYPES.map(t => <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>)}
            </Select>
        </RealEstateFormControl>
    );
}