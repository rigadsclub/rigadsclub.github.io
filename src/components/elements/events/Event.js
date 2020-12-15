import React from "react";
import TopWrapper from "../TopWrapper";
import BottomWrapper from "../BottomWrapper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageFrame from "../ImageFrame";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "../Footer";
import Image from "../Image";
import Grid from "@material-ui/core/Grid";
import EventSpeaker from "./EventSpeaker";
import {styled} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: '100%',
        backgroundImage: props => `url(${process.env.PUBLIC_URL}${props.imagePath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export const EventDetailsLink = styled('a')({
    color: "white",
    ':visited': {
        color: "white",
    },
});

export const EventBodyLink = styled('a')({
    color: '#363636 !important',
    '&:visited': {
        color: '$363636 !important',
    },
})

export const EventDetails = styled(Box)({
    paddingTop: 5,
    maxWidth: '600px',
    textAlign: 'justify',
});

export const EventVideo = styled('div') ({
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
});

export default function Event({
                                  id,
                                  title,
                                  imagePath,
                                  date,
                                  zoomLink,
                                  details,
                                  speakers,
                                  children,
                                  speakersTitle="Speakers"
                              }) {
    const classes = useStyles({imagePath});
    return (
        <>
            <TopWrapper>
                <Box display="flex" flexDirection="row" pt='1rem' pb='1rem'>
                    <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block'}} pr='1rem'>
                        <ImageFrame>
                            <Image><div className={classes.image}/></Image>
                        </ImageFrame>
                    </Box>
                    <Box>
                        <Box m={0.25}>
                            <Typography variant='h4'>
                                Meetup #{id}: {title}
                                <Typography variant="subtitle1">{date} in
                                    <a className={classes.link} style={{marginLeft: 5}} href={zoomLink} target="_blank">
                                        Zoom<span style={{marginLeft: 2}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-6px'}}/></span>
                                    </a>
                                </Typography>
                            </Typography>
                            {details}
                        </Box>
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
            </TopWrapper>
            <BottomWrapper>
                <Typography variant='h5'>
                    {speakersTitle}
                </Typography>
                <Grid container>
                    {speakers.map(speaker => (
                        <Grid item>
                            <EventSpeaker {...speaker} />
                        </Grid>
                    ))}
                </Grid>
                {children}
                <Box mt={3} mb={3}>
                    <Footer />
                </Box>
            </BottomWrapper>
        </>
    )
}