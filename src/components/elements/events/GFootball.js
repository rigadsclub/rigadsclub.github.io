import React from "react";
import TopWrapper from "../TopWrapper";
import BottomWrapper from "../BottomWrapper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageFrame from "../ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "../Footer";
import Image from "../Image";
import MemberAvatar from "../../MemberAvatar";
import {Button} from "@material-ui/core";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Avatar from "@material-ui/core/Avatar";
import SvgKaggleMark from "../../svg/SvgKaggleMark";
import SvgLinkedinMark from "../../svg/SvgLinkedinMark";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    details: {
        paddingTop: 5,
        maxWidth: '600px',
        textAlign: 'justify',
    },
    gfootball: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/events/18/Game-Football.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    link: {
        color: "white",
        ':visited': {
            color: "white",
        },
    },
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    videoWrapper: {
        position: "relative",
        paddingBottom: "56.25%", /* 16:9 */
        paddingTop: "25px",
        height: 0,
        '& iframe': {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        }
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    iconKaggle: {
        width: 20,
        height: 20,
        marginTop: -2
    },
    bodyLink: {
        color: '#363636 !important',
        '&:visited': {
            color: '$363636 !important',
        },
    }
}));

export default function GFootball() {
    const classes = useStyles();
    return (
        <>
            <TopWrapper>
                <Box display="flex" flexDirection="row" pt='1rem' pb='1rem'>
                    <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block'}} pr='1rem'>
                        <ImageFrame>
                            <Image><div className={classes.gfootball}/></Image>
                        </ImageFrame>
                    </Box>
                    <Box>
                        <Box m={0.25}>
                            <Typography variant='h4'>
                                Meetup #18: Reinforcement Learning with Google Football
                                <Typography variant="subtitle1">December 3rd, 12:00 PM CET in
                                    <a className={classes.link} style={{marginLeft: 5}} href={"https://us02web.zoom.us/j/88647667218"} target="_blank">
                                        Zoom<span style={{marginLeft: 2}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-6px'}}/></span>
                                    </a>
                                </Typography>
                            </Typography>
                        </Box>
                        <Box m={0.25} className={classes.details}>
                            <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                                Introduction
                            </Typography>
                            <Typography variant='body2'>
                                The goal of reinforcement learning (RL) is to train smart agents that can interact with their environment and solve complex tasks, with real-world applications towards robotics, self-driving cars, and more.
                            </Typography>
                            <Typography variant='body2'>
                                Recent Google Research football environment competition on  <a className={classes.link} href={"https://www.kaggle.com/c/google-football"}>Kaggle</a> enabled Machine Learning enthusiasts from all over the world to create AI agents that can play football!
                            </Typography>
                            <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                                About the meetup
                            </Typography>
                            <Typography variant='body2'>
                                We will have great guests - Tom Van de Wiele and Dmitry Gordeev who developed one of the most successful Google Football RL agents. They have gladly agreed to present their solution and insights learned through the process.
                            </Typography>
                            <Box mt={2}>
                                <div title="Add to Calendar" className="addeventatc" onClick={() => {
                                    const img = document.createElement('img');
                                    img.height = 1;
                                    img.width = 1;
                                    img.style = { display: 'none' };
                                    img.alt = '';
                                    img.src = 'https://px.ads.linkedin.com/collect/?pid=2999905&conversionId=3665137&fmt=gif';
                                    document.body.appendChild(img);
                                }}>
                                    Add to Calendar
                                    <span className="start">2020-12-03 13:00</span>
                                    <span className="end">2020-12-03 14:00</span>
                                    <span className="timezone">Europe/Riga</span>
                                    <span className="title">Reinforcement Learning with Google Football</span>
                                    <span className="description">
                                        Tom Van de Wiele and Dmitry Gordeev who developed one of the most successful Google Football RL agents will present their solution and insights learned through the process.
                                        <br/><br/>
                                        Join us online with Zoom: https://us02web.zoom.us/j/88647667218
                                    </span>
                                    <span className="location">https://us02web.zoom.us/j/88647667218</span>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    Speakers
                </Typography>
                <Grid container>
                    <Grid item xl={4} lg={4} md={5} sm={8} xs={12}>
                        <Box display="flex" width="100%" justifyContent="flex-start" mb={3}>
                            <Avatar alt={'tom'} src={`${process.env.PUBLIC_URL}/images/events/18/tom.jpg`} className={classes.avatar} />
                            <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h4">Tom Van de Wiele</Typography>
                                <Typography variant="subtitle1">Kaggle Competitions Master<br/>Data Scientist at Intelecy</Typography>
                                <Box display="flex">
                                    <a href="https://www.linkedin.com/in/tom-van-de-wiele-a411a8136/" target="_blank"><div className={classes.icon}>
                                        <SvgLinkedinMark />
                                    </div></a>
                                    <a href="https://www.kaggle.com/tvdwiele" target="_blank"><div className={classes.iconKaggle}>
                                        <SvgKaggleMark />
                                    </div></a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={4} lg={4} md={5} sm={8} xs={12}>
                        <Box display="flex" width="100%" justifyContent="flex-start" mb={3}>
                            <Avatar alt={'tom'} src={`${process.env.PUBLIC_URL}/images/events/18/dmitry.jpg`} className={classes.avatar} />
                            <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h4">Dmitry Gordeev</Typography>
                                <Typography variant="subtitle1">Kaggle Competitions Grandmaster<br/>Senior Data Scientist at H2O.ai</Typography>
                                <Box display="flex">
                                    <a href="https://www.linkedin.com/in/dmitry-gordeev-50116023/" target="_blank"><div className={classes.icon}>
                                        <SvgLinkedinMark />
                                    </div></a>
                                    <a href="https://www.kaggle.com/dott1718" target="_blank"><div className={classes.iconKaggle}>
                                        <SvgKaggleMark />
                                    </div></a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant='h5' style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle"}}>
                    How to join?
                </Typography>
                <Typography variant='body2'>
                    Event will be held in <a className={classes.bodyLink} href={"https://us02web.zoom.us/j/88647667218"} target="_blank">
                    Zoom<span style={{marginLeft: 5}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-5px'}}/></span>
                </a> on December 3rd 12:00 PM CET.
                </Typography>
                <Typography variant='body2'>
                    Please use <a href="#" className={classes.bodyLink} onClick={() => window.SleekNote.triggerOnclick('a1f54ec7-8d39-4391-b7aa-947269039ad1')}>"Sign up for the meetup"</a> button and we will send out an invitation to you!
                </Typography>
                <Typography variant='body2'>
                    Alternatively use "Add to Calendar" button above to save the date. See you soon at Riga Data Science Club!
                </Typography>
                <Typography variant='h5' style={{paddingTop: '15px', paddingRight: 0, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <span style={{paddingRight: '10px'}}>Google Research Football Environment</span>
                    <iframe
                    src="https://ghbtns.com/github-btn.html?user=google-research&repo=football&type=star&count=true&size=large"
                    frameBorder="0" scrolling="0" width="150" height="30" title="GitHub"></iframe>
                </Typography>
                <div className={classes.videoWrapper}>
                    <iframe width="760" height="515" src="https://www.youtube.com/embed/F8DcgFDT9sc" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <Box mt={3} mb={3}>
                    <Footer />
                </Box>
            </BottomWrapper>
        </>
    )
}