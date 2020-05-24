import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #dcdce7',
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
        width: 50,
        height: 50,
        paddingRight: 12,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo/ds-icon-dark.png)`,
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

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div className={classes.identity}>
                <div className={classes.logoDark} />
                <h2>Riga Data Science Club</h2>
            </div>
            {
                /*
                <div className={classes.navigation}>
                <p>ABOUT</p>
                <p>PROJECTS</p>
                <p>JOIN US</p>
            </div>
                 */
            }

        </div>
    );
}