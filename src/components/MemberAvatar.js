import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import SvgKaggleMark from "./svg/SvgKaggleMark";
import SvgGithubMark from "./svg/SvgGithubMark";
import SvgLinkedinMark from "./svg/SvgLinkedinMark";

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

export default function MemberAvatar({name, bio, image, kaggle, github, linkedin}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar alt={name} src={image} className={classes.avatar} />
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="subtitle2">{bio}</Typography>
            {/* <p className={classes.bio}>{bio}</p><div className={classes.icons}>
                {kaggle && <a href={kaggle} target="_blank"><div className={classes.icon}>
                    <SvgKaggleMark />
                </div></a>}
                {github && <a href={github} target="_blank"><div className={classes.icon}>
                    <SvgGithubMark />
                </div></a>}
                {linkedin && <a href={linkedin} target="_blank"><div className={classes.icon}>
                    <SvgLinkedinMark />
                </div></a>}
            </div>*/}
        </div>
    )
}