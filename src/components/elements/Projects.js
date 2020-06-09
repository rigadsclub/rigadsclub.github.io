import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from "@material-ui/core/Typography";
import ImageRiga from "./images/ImageRiga";
import ImageFrame from "./ImageFrame";
import Image from "./Image";
import ImageTrafficSign from "./images/ImageTrafficSign";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    button: {
        marginRight: 15,
        marginBottom: 15,
    },
    title: {
        margin: '0 0 10px 0',
        paddingTop: 0,
    },
    dummyProject: {
        minWidth: '300px',
        maxWidth: '300px',
        padding: '11px 14px 11px 11px',
        color: '#eeeeee',
        background: "transparent",
        border: `2px dashed #eeeeee`,
    },
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <Box component='div' pb='0.5rem'>
            <Box component='div' display='flex' overflow='auto'>
                <ButtonBase component={Link} to={'/projects/riga-real-estate'} className={classes.button}>
                    <ImageFrame>
                        <Typography variant='h6' color={'textPrimary'}>
                            Riga Real Estate Price Prediction
                        </Typography>
                        <ImageRiga />
                    </ImageFrame>
                </ButtonBase>
                <ButtonBase component={Link} to={'/projects/traffic-sign-recognition'} className={classes.button}>
                    <ImageFrame>
                        <Typography variant='h6' color={'textPrimary'}>
                            Traffic Sign Recognition
                        </Typography>
                        <ImageTrafficSign />
                    </ImageFrame>
                </ButtonBase>
                <ButtonBase component={Link} to={'/join-us'} className={classes.button}>
                    <Paper elevation={3} className={classes.dummyProject}>
                        <Typography variant='h6'>
                            Join Us To Build Your Own
                        </Typography>
                        <Image />
                    </Paper>
                </ButtonBase>
            </Box>
            <Box component="div" display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                <Typography variant='subtitle1' align='right'>Swipe to see more ></Typography>
            </Box>
        </Box>
    );
}