import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {
    LinkedinFollowCompany,
} from 'react-social-plugins';

const useStyles = makeStyles(theme => ({
    top: {
        paddingBottom: 5,
        backgroundColor: "#363636",
        color: '#eeeeee',
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
        flexWrap: "wrap",
        justifyItems: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        borderBottom:  props => props.hideDivider ? 'none' : `1px solid #eeeeee`,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: 0,
        margin: 0,
    },
    identity: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
    social: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
    logoDark: {
        width: 30,
        height: 30,
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

export default function TopWrapper({children, hideDivider}) {
    const classes = useStyles({hideDivider});
    return (
        <div className={classes.top}>
            <Container color='contrastText'>
                <div className={classes.header}>
                    <div className={classes.identity}>
                        <Link to={'/'}>
                            <div className={classes.logoDark} />
                        </Link>
                        <Link className={classes.link} to={'/'}>
                            <Typography variant='h2' style={{marginLeft: '0.8rem'}}>
                                Riga Data Science Club
                            </Typography>
                        </Link>
                    </div>
                    <div className={classes.social}>
                        <LinkedinFollowCompany
                            companyId={53413934}
                            counter="none"
                            lang="en_US"
                        />
                    </div>
                </div>
                {children}
            </Container>
        </div>
    )
}