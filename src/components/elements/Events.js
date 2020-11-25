import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from "@material-ui/core/Typography";
import ImageRiga from "./images/ImageRiga";
import ImageFrame from "./ImageFrame";
import Image from "./Image";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    button: {
        marginRight: 15,
        marginBottom: 15,
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
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
    gfootball: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/events/18/Game-Football.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    branding: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/events/17/whatisyourpersonalbrand.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    ethics: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/events/16/devilvsangel.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    eventTitle: {
        paddingTop: '5px',
    },
    badge: {
        fontWeight: "bold",
        transform: "rotate(-45deg)",
        position: "absolute",
        top: "-50px",
        width: "100px",
        left: "-50px",
        height: "100px",
        boxShadow: "0 0 3px 2px rgba(0,0,0,0.8)",
        '& span': {
            textAlign: "center",
            position: "absolute",
            width: "45px",
            left: "28px",
            top: "78px",
        }
    },
    soon: {
        fontWeight: "bold",
        backgroundColor: "red",
    },
    past: {
        backgroundColor: "#3B5998",
    },
}));

export default function Events() {
    const classes = useStyles();
    return (
        <Box component='div' pb='0.5rem'>
            <Box component='div' display='flex' overflow='auto'>
                <a href={'/events/gfootball'} target="_self">
                    <ButtonBase className={classes.button}>
                        <div className={`${classes.badge} ${classes.soon}`}>
                            <span>Next</span>
                        </div>
                        <ImageFrame>
                            <Image><div className={classes.gfootball}/></Image>
                            <Typography className={classes.eventTitle} variant='h6' color={'textPrimary'}>
                                Reinforcement Learning with <br/>Google Research Football
                            </Typography>
                        </ImageFrame>
                    </ButtonBase>
                </a>
                <a href={'https://www.linkedin.com/events/rigadsclubmeetup-17-buildingape6732745406326833152/'} target="_blank">
                    <ButtonBase className={classes.button}>
                        <div className={`${classes.badge} ${classes.past}`}>
                            <span># 17</span>
                        </div>
                        <ImageFrame>
                            <Image><div className={classes.branding}/></Image>
                            <Typography className={classes.eventTitle} variant='h6' color={'textPrimary'}>
                                Personal Branding in <br/>Data Science
                            </Typography>
                        </ImageFrame>
                    </ButtonBase>
                </a>
                <a href={'https://www.linkedin.com/events/rigadsclubmeetup-16-dataethics6724008615625138176/'} target="_blank">
                    <ButtonBase className={classes.button}>
                        <div className={`${classes.badge} ${classes.past}`}>
                            <span># 16</span>
                        </div>
                        <ImageFrame>
                            <Image><div className={classes.ethics}/></Image>
                            <Typography className={classes.eventTitle} variant='h6' color={'textPrimary'}>
                                Data Ethics<br/><br/>
                            </Typography>
                        </ImageFrame>
                    </ButtonBase>
                </a>
            </Box>
        </Box>
    );
}