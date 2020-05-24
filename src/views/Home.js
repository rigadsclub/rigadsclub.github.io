import Members from "../components/Members";
import React from "react";
import Projects from "./Projects";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    homeContainer: {
        textAlign: 'left',
    },
    homeSection: {
        paddingBottom: '20px',
    },
});
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <section className={classes.homeSection}>
                <h2>About</h2>
                <h4>Riga Data Science Club is a non-profit organization to share ideas, experience and build machine learning projects together.</h4>
                <h4>Our goal is building a strong data science community in Latvia to drive progress in the machine learning&artificial intelligence field.</h4>
            </section>
            <section className={classes.homeSection}>
                <h2>Highlights</h2>
                <Projects />
            </section>
            <section className={classes.homeSection}>
                <h2>Members</h2>
                <Members />
            </section>
        </div>
    );
}