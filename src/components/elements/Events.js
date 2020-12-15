import React from 'react';
import SpotlightEvent from "./events/SpotlightEvent";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    scrollBar: {
        '&::-webkit-scrollbar': {
            width: '5px',
            height: theme.spacing(1),
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#555555',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#eeeeee',
            outline: '1px solid #eeeeee'
        }
    }
}));

export default function Events() {
    const classes = useStyles();
    return (
        <Box display="flex" overflow="auto" pb={2} className={classes.scrollBar}>
            <Box pr={2}>
                <SpotlightEvent
                    id={19}
                    href={'/events/alphafold'}
                    badgeText="Dec 17"
                    title="Predicting Protein Structure with AlphaFold"
                    imagePath="/images/events/19/alphafold.jpg"
                    upcoming
                />
            </Box>
            <Box pr={2}>
                <SpotlightEvent
                    id={18}
                    href={'/events/gfootball'}
                    badgeText="Dec 03"
                    title="RL with Google Research Football"
                    imagePath="/images/events/18/Game-Football.jpg"
                />
            </Box>
            <Box pr={2}>
                <SpotlightEvent
                    id={17}
                    href={'/events/gfootball'}
                    badgeText="Nov 19"
                    title="Personal Branding in Data Science"
                    imagePath="/images/events/17/whatisyourpersonalbrand.jpg"
                />
            </Box>
            <Box pr={2}>
                <SpotlightEvent
                    id={16}
                    href={'/events/gfootball'}
                    badgeText="Nov 05"
                    title="Data Ethics"
                    imagePath="/images/events/16/devilvsangel.jpg"
                />
            </Box>
        </Box>
    );
}