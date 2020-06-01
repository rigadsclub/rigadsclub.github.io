import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    image: {
        width: '20rem',
        height: '20rem',
        maxWidth: '300px',
        maxHeight: '300px',
    },
}));

export default function Image({children}) {
    const classes = useStyles();
    return <div className={classes.image}>{children}</div>;
}