import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    name: {
        padding: 0,
        margin: 0,
        marginTop: 5,
    },
    bio: {
        padding: 0,
        margin: 4,
        fontSize: 12,
        color: '#494747',
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        margin: '0.05rem',
    },
}));

export default function MemberAvatar({name, bio, image, linkedin}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {linkedin
                ? <a href={linkedin} target="_blank"><Avatar alt={name} src={image} className={classes.avatar} /></a>
                : <Avatar alt={name} src={image} className={classes.avatar} />
            }
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="subtitle2">{bio}</Typography>
        </div>
    )
}