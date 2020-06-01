import React from "react";
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageFrame from "../components/elements/ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import RigaRealEstateDemo from "./realestate/RigaRealEstateDemo";
import ImageSam from "../components/elements/images/ImageSam";
import Footer from "../components/elements/Footer";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        paddingTop: 10,
        paddingBottom: 10,
    },
    description: {
        paddingLeft: 15,
    },
    details: {
        maxWidth: '600px',
        textAlign: 'justify',
    },
}));

export default function JoinUs() {
    const classes = useStyles();
    return (
        <>
            <TopWrapper hideDivider>
            </TopWrapper>
            <BottomWrapper>
                <div className={classes.root}>
                    <div>
                        <ImageFrame>
                            <ImageSam />
                        </ImageFrame>
                    </div>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScGjdoqjbx7j0wkJ9oFXRSCSQsVysEFUhhBFo3WuoQ-FI4bXQ/viewform?embedded=true"
                        width="640" height="1150" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                    </iframe>
                </div>
            </BottomWrapper>
            <Footer />
        </>
    )
}