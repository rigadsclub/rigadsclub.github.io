import SvgLinkedinMark from "../../svg/SvgLinkedinMark";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        width: 20,
        height: 20,
        marginRight: 2
    },
}));

export default function IconLinkedIn({href}) {
    const classes = useStyles();
    return (
        <a href={href} target="_blank">
            <div className={classes.icon}>
                <SvgLinkedinMark />
            </div>
        </a>
    )
}