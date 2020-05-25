import React from "react";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    about: {
      lineHeight: '16px',
    },
})
export default function About() {
    const classes = useStyles();
    return (
        <>
            <p className={classes.about}>
                Riga Data Science Club is a non-profit organization to share ideas, experience and build machine learning projects together.
            </p>
            <p>
                Our goal is building a strong data science community in Latvia to drive progress in the machine learning&artificial intelligence field.
            </p>
        </>
    )
}