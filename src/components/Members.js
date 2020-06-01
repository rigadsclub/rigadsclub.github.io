import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MemberAvatar from "./MemberAvatar";

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
        padding: '1rem',
    },
}));

const MEMBERS = [
    {
        name: 'Dmitry Yemelyanov',
        image: 'sonofaman.jpg',
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
    {
        name: 'Annija Daugaviete',
        image: 'adaugaviete.jpg',
        bio: 'Junior Data Scientist@Creditreform Latvija',
        kaggle: 'https://www.kaggle.com/annijadaugaviete',
    },
    {
        name: 'Daria Lashkevich',
        image: 'dlashkevich.jpeg',
        bio: 'AI Engineer | Data scientist | Speaker',
    },
    {
        name: 'Edving Kronberg',
        image: 'eauzins.jpg',
        bio: 'Sales Manager@LASD LV',
        kaggle: 'https://www.kaggle.com/edvinkronberg',
    },
    {
        name: 'Narzullo Nasrullozoda',
        image: 'nnasrullozoda.jpeg',
        bio: 'Data Science and Management@Leuphana University',
    },
    {
        name: 'Kate Kuznecova',
        image: 'kkuznecova.jpeg',
        bio: 'Data Scientist@DAIN Studios',
    },
    {
        name: 'Vladyslav Yakovenko',
        image: 'vyakovenko.jpeg',
        bio: 'Data Scientist',
    },
    {
        name: 'Audris Ločmelis',
        image: 'aločmelis.jpeg',
        bio: 'AI and Data Science Lead@Deloitte Latvia',
    },
    {
        name: 'Mairis Eglitis',
        image: 'meglitis.jpeg',
        bio: 'Data Engineer@Leadgence'
    },
    /*
    {

        name: 'Maksims Pečeņs',
        image: 'mpecens.jpeg',
        bio: 'Data Scientist at Valsts ieņēmumu dienests'
    }*/
]
export default function Members() {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            {
                MEMBERS.map(member => (
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12} spacing={3}>
                        <MemberAvatar key={member.name} {...member} image={`${process.env.PUBLIC_URL}/images/avatar/${member.image}`} />
                    </Grid>
                ))
            }
        </Grid>
    )
}