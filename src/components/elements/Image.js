import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    image: {
        width: '20rem',
        height: '20rem',
        minWidth: '100px',
        minHeight: '100px',
    },
}));

export default function Image({children}) {
    const classes = useStyles();
    return <div className={classes.image}>{children}</div>;
}