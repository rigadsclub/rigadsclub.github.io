import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../Image";

const useStyles = makeStyles(theme => ({
    community: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/art/community.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function ImageCommunity() {
    const classes = useStyles();
    return <Image><div className={classes.community}/></Image>;
}