import React from "react";
import TopWrapper from "../TopWrapper";
import BottomWrapper from "../BottomWrapper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageFrame from "../ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "../Footer";

const useStyles = makeStyles({
    details: {
        paddingTop: 5,
        maxWidth: '600px',
        textAlign: 'justify',
    },
});

export default function Event() {
    const classes = useStyles();
    return (
        <>
            <TopWrapper>
                <Box display="flex" flexDirection="row" pt='1rem' pb='1rem'>
                    <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block'}} pr='1rem'>
                        <ImageFrame>
                            <ImageRiga />
                        </ImageFrame>
                    </Box>
                    <Box>
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
                    </Box>
                </Box>
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    Try it out!
                </Typography>
                <Footer />
            </BottomWrapper>
        </>
    )
}