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
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import SvgLinkedinMark from "../components/svg/SvgLinkedinMark";
import SvgKaggleMark from "../components/svg/SvgKaggleMark";

const useStyles = makeStyles(theme => ({
    details: {
        paddingTop: 5,
        maxWidth: '600px',
        textAlign: 'justify',
    },
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    iconLinkedin: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    iconKaggle: {
        width: 20,
        height: 20,
        marginTop: -2,
        marginLeft: -3,
    },
}));

export default function RigaRealEstate() {
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
                    Authors
                </Typography>
                <Grid container>
                    <Grid item xl={4} lg={4} md={5} sm={8} xs={12}>
                        <Box display="flex" width="100%" justifyContent="flex-start" mb={3}>
                            <Avatar alt={'dmitry'} src={`${process.env.PUBLIC_URL}/images/avatar/dyemelyanov.jpg`} className={classes.avatar} />
                            <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h4">Dmitry Yemelyanov</Typography>
                                <Typography variant="subtitle1">Consultant at Forward IT Consulting</Typography>
                                <Box display="flex">
                                    <a href="https://www.linkedin.com/in/datasciencedj" target="_blank"><div className={classes.iconLinkedin}>
                                        <SvgLinkedinMark />
                                    </div></a>
                                    <a href="https://www.kaggle.com/dmitryyemelyanov" target="_blank"><div className={classes.iconKaggle}>
                                        <SvgKaggleMark />
                                    </div></a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={4} lg={4} md={5} sm={8} xs={12}>
                        <Box display="flex" width="100%" justifyContent="flex-start" mb={3}>
                            <Avatar alt={'daniil'} src={`${process.env.PUBLIC_URL}/images/avatar/dyachmenev.jpeg`} className={classes.avatar} />
                            <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h4">Danil Yachmenev</Typography>
                                <Typography variant="subtitle1">Data Scientist at Particle.One</Typography>
                                <Box display="flex">
                                    <a href="https://www.kaggle.com/danilyachmenev13" target="_blank"><div className={classes.iconKaggle}>
                                        <SvgKaggleMark />
                                    </div></a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
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