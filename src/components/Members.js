import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MemberAvatar from "./MemberAvatar";
import members from '../data/members.json';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        borderRadius: '50%',
        border: `2px dashed #363636`,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    joinUs: {
        textDecoration: 'none',
        color: '#363636',
    },
}));

export default function Members() {
    const classes = useStyles();
    return (
        <Grid container>
            {
                members.list.map(member => (
                    <Grid key={member.name} item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <MemberAvatar {...member} image={`${process.env.PUBLIC_URL}/images/avatar/${member.image}`} />
                    </Grid>
                ))
            }
            <Grid key='avatar' item xl={2} lg={3} md={4} sm={6} xs={12}>
                <a className={classes.joinUs} href='/join-us'>
                    <MemberAvatar
                        className={classes.avatar}
                        name='Join us'
                        bio='You@Riga Data Science Club'
                        image='#'/>
                </a>
            </Grid>
        </Grid>
    )
}