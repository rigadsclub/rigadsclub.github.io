import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SvgKaggleMark from "../../svg/SvgKaggleMark";

const useStyles = makeStyles(theme => ({
    icon: {
        width: 20,
        height: 20,
        marginTop: -2
    }
}));

export default function IconKaggle({href}) {
    const classes = useStyles();
    return (
        <a href={href} target="_blank">
            <div className={classes.icon}>
                <SvgKaggleMark />
            </div>
        </a>
    )
}