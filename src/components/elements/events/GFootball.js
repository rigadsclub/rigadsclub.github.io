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
                                <Typography variant="subtitle1">December 3rd, 12:00 CET in
                                    <a className={classes.link} style={{marginLeft: 5}} href={"https://us02web.zoom.us/s/88647667218"} target="_blank">
                                            Zoom<span style={{marginLeft: 5}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-5px'}}/></span>
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
                                <div title="Add to Calendar" className="addeventatc">
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
                <Box display="flex" justifyContent="center" width="100%">
                    <Box display="flex" m={3}>
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
                    <Box display="flex" m={3}>
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
                </Box>
                <Typography variant='h5' style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle"}}>
                    <span>Google Research Football Environment</span><iframe
                    src="https://ghbtns.com/github-btn.html?user=google-research&repo=football&type=star&count=true&size=large"
                    frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
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