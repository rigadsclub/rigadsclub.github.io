import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import RigaRealEstateProject from "./realestate/RigaRealEstateProject";

const useStyles = makeStyles(() => ({
    root: {

    },
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <RigaRealEstateProject />
        </div>
    );
}