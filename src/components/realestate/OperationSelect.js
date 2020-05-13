import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const OPERATIONS = [
    {label: 'Pārdošana', value: 'For Rent'},
    {label: 'Izīrēšana', value: 'For Sale'},
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

export function OperationSelect() {
    const classes = useStyles();
    const [operation, setOperation] = React.useState('For Rent');
    const handleChange = (event) => {
        setOperation(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Operation</InputLabel>
            <Select
                value={operation}
                onChange={handleChange}
                label="Operation"
            >
                {OPERATIONS.map(o => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}