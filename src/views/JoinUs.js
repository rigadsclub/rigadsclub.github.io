import React from "react";
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Box from "@material-ui/core/Box";
import ImageFrame from "../components/elements/ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "../components/elements/Footer";
import ImageCommunity from "../components/elements/images/ImageCommunity";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        paddingTop: 10,
        paddingBottom: 10,
    },
    form: {
        textAlign: 'center',
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
                    <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block'}}>
                        <ImageFrame>
                            <ImageCommunity />
                        </ImageFrame>
                    </Box>
                    <div className={classes.form}>
                        <iframe
                            title='Sign up form'
                            src="https://docs.google.com/forms/d/e/1FAIpQLScGjdoqjbx7j0wkJ9oFXRSCSQsVysEFUhhBFo3WuoQ-FI4bXQ/viewform?embedded=true"
                            width="640" height="1150" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                        </iframe>
                    </div>
                </div>
            </BottomWrapper>
            <Footer />
        </>
    )
}