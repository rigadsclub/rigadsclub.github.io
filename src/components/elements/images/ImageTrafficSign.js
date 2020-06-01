import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../Image";

const useStyles = makeStyles({
    trafficSign: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/trafficsign/5t.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
});

export default function ImageTrafficSign() {
    const classes = useStyles();
    return <Image><div className={classes.trafficSign}/></Image>;
}