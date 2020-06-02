import React from "react";
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageRiga from "../components/elements/images/ImageRiga";
import ImageFrame from "../components/elements/ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import RigaRealEstateDemo from "./realestate/RigaRealEstateDemo";
import Footer from "../components/elements/Footer";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    description: {
        paddingLeft: 15,
    },
    details: {
        paddingTop: 5,
        maxWidth: '600px',
        textAlign: 'justify',
    },
});

export default function RigaRealEstate() {
    const classes = useStyles();
    return (
        <>
            <TopWrapper>
                <div className={classes.root}>
                    <div>
                        <ImageFrame>
                            <ImageRiga />
                        </ImageFrame>
                    </div>
                    <div className={classes.description}>
                        <Box m={0.25}>
                            <Typography variant='h4'>
                                Riga Real Estate Price Prediction
                            </Typography>
                        </Box>
                        <Box m={0.25}>
                            <Typography variant='h6'>
                                Artificial Intelligence that suggests real estate sale and rent price
                            </Typography>
                        </Box>
                        <Box m={0.25} className={classes.details}>
                            <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                                Problem
                            </Typography>
                            <Typography variant='body2'>
                                Estimating the value of real estate is necessary for a variety of endeavors, including financing, sales listing,
                                investment analysis, property insurance, and taxation.
                                Real estate valuation is often a challenging task, as it involves analysis of multiple properties
                                such as location, square footage, number of rooms, condition, age of the building.
                            </Typography>
                            <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                                Solution
                            </Typography>
                            <Typography variant='body2'>
                                Real estate appraisal could be facilitated by the means of machine learning.
                                We have built a prediction model that makes use of existing market data of sale and rent prices
                                to estimate the value of any other real estate property.
                            </Typography>
                        </Box>
                    </div>
                </div>
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    Try it out!
                </Typography>
                <RigaRealEstateDemo />
                {/*
                <Typography variant='h5'>
                    How it is made
                </Typography>
                <RigaRealEstateHow />
                <Typography variant='h5'>
                    Public API
                </Typography>
                <RigaRealEstateApi />
                */
                }
                <Footer />
            </BottomWrapper>
        </>
    )
}