import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    image: {
        width: 300,
        height: 300,
    },
});

export default function Image({children}) {
    const classes = useStyles();
    return <div className={classes.image}>{children}</div>;
}