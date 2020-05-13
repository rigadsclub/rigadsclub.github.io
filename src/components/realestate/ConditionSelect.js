import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CONDITION_TYPES = [
    {label: 'Visas ērtības', value: 'All, amenities'},
    {label: 'Daļējās ērtības', value: 'Partial, amenities'},
    {label: 'Bez ērtībām', value: 'Without, amenities'},
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

export function ConditionSelect() {
    const classes = useStyles();
    const [condition, setCondition] = React.useState('');
    const handleChange = (event) => {
        setCondition(event.target.value);
    };

    return (
        <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel>Condition</InputLabel>
            <Select
                value={condition}
                onChange={handleChange}
                label='Condition'
            >
                {CONDITION_TYPES.map(c => <MenuItem value={c.value}>{c.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}