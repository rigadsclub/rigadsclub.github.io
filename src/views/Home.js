import Members from "../components/Members";
import React from "react";
import Projects from "./Projects";
import {makeStyles} from "@material-ui/core/styles";
import About from "./About";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'left',
        color: theme.palette.text.primary,
    },
}));
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section className={classes.homeSection}>
                <h2>About</h2>
                <About />
            </section>
            <section className={classes.homeSection}>
                <h2>Projects</h2>
                <Projects />
            </section>
        </div>
    );
}