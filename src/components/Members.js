import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberAvatar from "./MemberAvatar";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
    },
}));

const MEMBERS = [
    {
        name: 'Dmitry Yemelyanov',
        image: 'dyemelyanov.jpg',
        kaggle: 'https://www.kaggle.com/dmitryyemelyanov',
        github: 'https://github.com/djemeljanovs',
        linkedin: 'https://www.linkedin.com/in/djemeljanovs/',
    },
    {
        name: 'Dmitry Trizna',
        image: 'dtrizna.jpg',
        kaggle: 'https://www.kaggle.com/dmitrijstrizna',

    },
    {
        name: 'Cees Roele',
        image: 'croele.jpg',
        kaggle: 'https://www.kaggle.com/ceesroele',
    },
    {
        name: 'Danil Yachmenev',
        kaggle: 'https://www.kaggle.com/danilyachmenev13',

    },
    {
        name: 'Annija Daugaviete',
        image: 'adaugaviete.jpg',
        kaggle: 'https://www.kaggle.com/annijadaugaviete',
    },
    {
        name: 'Edving Kronberg',
        image: 'eauzins.jpg',
        kaggle: 'https://www.kaggle.com/edvinkronberg',
    }
]
export default function Members() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                MEMBERS.map(member => (
                    <MemberAvatar {...member} image={`${process.env.PUBLIC_URL}/images/avatar/${member.image}`} />
                ))
            }
        </div>
    )
}