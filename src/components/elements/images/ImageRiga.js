import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../Image";

const useStyles = makeStyles({
    riga: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/riga/rigaoldtown.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
});

export default function ImageRiga() {
    const classes = useStyles();
    return <Image><div className={classes.riga}/></Image>;
}