import React from "react";
import Projects from "../components/elements/Projects";
import Members from "../components/Members";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import About from "../components/elements/About";
import Footer from "../components/elements/Footer";
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Events from "../components/elements/Events";

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
            <TopWrapper>
                <Typography variant='h5'>
                    About
                </Typography>
                <About />
                <Typography variant='h5'>
                    Our meetups
                </Typography>
                <Events />
                <Typography variant='h5'>
                    Our projects
                </Typography>
                <Projects />
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    Members
                </Typography>
                <Members />
                <Footer />
            </BottomWrapper>
        </div>
    );
}