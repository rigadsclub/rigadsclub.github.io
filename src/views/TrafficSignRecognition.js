import React from "react";
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageFrame from "../components/elements/ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "../components/elements/Footer";
import ImageTrafficSign from "../components/elements/images/ImageTrafficSign";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        paddingTop: 10,
        paddingBottom: 10,
    },
    description: {
        padding: 15,
    },
    details: {
        paddingTop: 5,
        maxWidth: '600px',
        textAlign: 'justify',
    },
});

export default function TrafficSignRecognition() {
    const classes = useStyles();
    return (
        <>
            <TopWrapper>
                <div className={classes.root}>
                    <div>
                        <ImageFrame>
                            <ImageTrafficSign />
                        </ImageFrame>
                    </div>
                    <div className={classes.description}>
                        <Box m={0.25}>
                            <Typography variant='h4'>
                                Traffic Sign Recognition
                            </Typography>
                        </Box>
                        <Box m={0.25}>
                            <Typography variant='h6'>
                            </Typography>
                        </Box>
                        <Box m={0.25} className={classes.details}>
                            <Typography variant='h5'>
                                The problem
                            </Typography>
                            <Typography variant='body2'>
                            </Typography>
                            <Typography variant='h5'>
                                Solution
                            </Typography>
                            <Typography variant='body2'>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    In development
                </Typography>
                <Footer />
            </BottomWrapper>
        </>
    )
}