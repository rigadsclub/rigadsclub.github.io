import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    project: {
        minWidth: '300px',
        maxWidth: '300px',
        padding: '13px',
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