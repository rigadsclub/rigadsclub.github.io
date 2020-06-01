import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../Image";

const useStyles = makeStyles(theme => ({
    sam: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/sam.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function ImageSam() {
    const classes = useStyles();
    return <Image><div className={classes.sam}/></Image>;
}