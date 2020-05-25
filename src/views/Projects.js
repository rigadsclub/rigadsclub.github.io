import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    button: {
        marginRight: 30,
        marginBottom: 30,
    },
    project: {
        minWidth: '300px',
        maxWidth: '300px',
        padding: '10px',
        color: theme.palette.text.secondary,
    },
    dummyProject: {
        minHeight: '438px',
        minWidth: '300px',
        maxWidth: '300px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
        color: theme.palette.text.primary,
        background: "transparent",
        border: '3px dashed #FFFFFF',
    },
    title: {
        margin: '0 0 10px 0',
        paddingTop: 0,
    },
    riga: {
        width: '100%',
        height: 400,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/riga/rigaoldtown.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    trafficsign: {
        width: '100%',
        height: 400,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/trafficsign/5t.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ButtonBase component={Link} to={'/riga-real-estate'} className={classes.button}>
                <Paper elevation={3} className={classes.project}>
                    <h3 className={classes.title}>Riga Real Estate Price Prediction</h3>
                    <div className={classes.riga}/>
                </Paper>
            </ButtonBase>
            <ButtonBase component={Link} to={'/traffic-sign'} className={classes.button}>
                <Paper elevation={3} className={classes.project}>
                    <h3 className={classes.title}>Traffic Sign Recognition</h3>
                    <div className={classes.trafficsign}/>
                </Paper>
            </ButtonBase>
            <ButtonBase component={Link} to={'/join-us'} className={classes.button}>
                <Paper elevation={3} className={classes.dummyProject}>
                    <h3 className={classes.title}>Join Us To Build Your Own</h3>
                </Paper>
            </ButtonBase>
        </div>
    );
}