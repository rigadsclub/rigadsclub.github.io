import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        width: 20,
        height: 20,
        marginLeft: 3,
        backgroundImage: props => `url(${process.env.PUBLIC_URL}/images/wikipedia-icon-small.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}));

export default function IconWikipedia({href}) {
    const classes = useStyles();
    return (
        <a href={href} target="_blank">
            <div className={classes.icon} />
        </a>
    )
}