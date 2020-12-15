import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../Image";

const useStyles = makeStyles(theme => ({
    button: {
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
    },
    frame: {
        padding: theme.spacing(2),
    },
    title: {
        margin: '0 0 10px 0',
        paddingTop: 0,
    },
    eventTitle: {
        paddingTop: theme.spacing(1),
    },
    badge: {
        fontWeight: "bold",
        backgroundColor: props => props.upcoming ? "red" : "#3B5998",
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
        },
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundImage: props => `url(${process.env.PUBLIC_URL}${props.imagePath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function SpotlightEvent({id, href, title, badgeText, children, imagePath, upcoming}) {
    const classes = useStyles({imagePath, upcoming});
    return (
        <a href={href} target="_self">
            <ButtonBase className={classes.button}>
                <div className={classes.badge}>
                    <span>{badgeText}</span>
                </div>
                <Paper className={classes.frame} elevation={3}>
                    <Image><div className={classes.image}/></Image>
                    <Typography className={classes.eventTitle} variant='h6' color={'textPrimary'}>
                        Online Meetup #{id}<br/>
                        <b>{title}</b>
                    </Typography>
                </Paper>
            </ButtonBase>
        </a>
    )
}