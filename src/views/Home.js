import React from "react";
import Projects from "./elements/Projects";
import Members from "../components/Members";
import Typography from "@material-ui/core/Typography";
import About from "./elements/About";
import Footer from "./elements/Footer";
import TopWrapper from "./elements/TopWrapper";
import BottomWrapper from "./elements/BottomWrapper";
import JoinUs from "./elements/JoinUs";

export default function Home() {
    return (
        <>
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
        </>
    );
}