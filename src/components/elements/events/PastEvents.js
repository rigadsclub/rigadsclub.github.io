import Box from "@material-ui/core/Box";
import PastEvent from "./PastEvent";
import React from "react";

export default function PastEvents() {
    return (
        <Box display="flex" flexDirection="column" width="100%" alignItems="flex-start">
            <a href={`/events/gfootball`} target="_self">
                <PastEvent
                    id={18}
                    title="Reinforcement Learning with Google Research Football"
                    imageURL="/images/events/18/Game-Football.jpg"
                />
            </a>
            <a href="https://www.linkedin.com/events/rigadsclubmeetup-17-buildingape6732745406326833152/" target="_blank">
                <PastEvent
                    id={17}
                    title="Personal Branding in Data Science"
                    imageURL="/images/events/17/whatisyourpersonalbrand.jpg"
                />
            </a>
            <a href="https://www.linkedin.com/events/rigadsclubmeetup-16-dataethics6724008615625138176/" target="_blank">
                <PastEvent
                    id={16}
                    title="Data Ethics"
                    imageURL="/images/events/16/devilvsangel.jpg"
                />
            </a>
        </Box>
    )
}