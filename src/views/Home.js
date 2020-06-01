import React from "react";
import Projects from "./Projects";
import Members from "../components/Members";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Footer from "./Footer";
import TopWrapper from "./TopWrapper";
import BottomWrapper from "./BottomWrapper";
import JoinUs from "./JoinUs";

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
                    Recent releases
                </Typography>
                <Projects />
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    Members
                </Typography>
                <Members />
                <Typography variant='h5'>
                    Join us
                </Typography>
                <JoinUs />
                <Footer />
            </BottomWrapper>
        </div>
    );
}