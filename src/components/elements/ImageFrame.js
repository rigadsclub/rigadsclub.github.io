import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    project: {
        padding: '0.8rem',
    },
}));

export default function ImageFrame({children}) {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.project}>
            {children}
        </Paper>
    )
}