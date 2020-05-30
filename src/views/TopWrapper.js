import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    top: {
        backgroundColor: "#363636",
        color: theme.palette.primary.contrastText,
        /*background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`,

         */
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '0 1rem',
        borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: 0,
        margin: 0,
    },
    identity: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        paddingRight: 10,
    },
    logoDark: {
        width: 30,
        height: 30,
        paddingRight: 12,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo/ds-icon-white.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    },
    navigation: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
}));

export default function TopWrapper({children}) {
    const classes = useStyles();
    return (
        <div className={classes.top}>
            <Container color='contrastText'>
                <div className={classes.header}>
                    <div className={classes.identity}>
                        <Link to={'/'}>
                            <div className={classes.logoDark} />
                        </Link>
                        <Link className={classes.link} to={'/'}>
                            <Typography variant='h2'>
                                Riga Data Science Club
                            </Typography>
                        </Link>
                    </div>
                </div>
                {children}
            </Container>
        </div>
    )
}