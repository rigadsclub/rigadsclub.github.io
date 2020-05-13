import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberAvatar from "./MemberAvatar";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
    },
    avatar: {
        padding: '1rem',
    },
}));

const MEMBERS = [
    {
        name: 'Dmitry Yemelyanov',
        image: 'dyemelyanov.jpg',
        bio: 'Consultant@Forward IT',
        kaggle: 'https://www.kaggle.com/dmitryyemelyanov',
        github: 'https://github.com/djemeljanovs',
        linkedin: 'https://www.linkedin.com/in/djemeljanovs/',
    },
    {
        name: 'Dmitry Trizna',
        image: 'dtrizna.jpg',
        bio: 'Penetration Tester, Security Researcher',
        kaggle: 'https://www.kaggle.com/dmitrijstrizna',

    },
    {
        name: 'Cees Roele',
        image: 'croele.jpg',
        bio: 'Scrum Master / Data Scientist',
        kaggle: 'https://www.kaggle.com/ceesroele',
    },
    {
        name: 'Danil Yachmenev',
        image: 'dyachmenev.jpeg',
        bio: 'Data Scientist@Particle.One',
        kaggle: 'https://www.kaggle.com/danilyachmenev13',

    },
    /*{
        name: 'Annija Daugaviete',
        image: 'adaugaviete.jpg',
        bio: 'Junior Data Scientist@Creditreform Latvija',
        kaggle: 'https://www.kaggle.com/annijadaugaviete',
    },*/
    {
        name: 'Edving Kronberg',
        image: 'eauzins.jpg',
        bio: 'Sales Manager@LASD LV',
        kaggle: 'https://www.kaggle.com/edvinkronberg',
    }
]
export default function Members() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                MEMBERS.map(member => (
                    <div className={classes.avatar} key={member.name}>
                        <MemberAvatar {...member} image={`${process.env.PUBLIC_URL}/images/avatar/${member.image}`} />
                    </div>
                ))
            }
        </div>
    )
}