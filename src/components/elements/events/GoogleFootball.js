import Event, {EventBodyLink, EventDetails, EventDetailsLink, EventVideo} from "./Event";
import React from "react";
import Typography from "@material-ui/core/Typography";
import IconLinkedIn from "../users/IconLinkedIn";
import IconKaggle from "../users/IconKaggle";

const GoogleFootballDetails = <EventDetails>
    <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        Introduction
    </Typography>
    <Typography variant='body2'>
        The goal of reinforcement learning (RL) is to train smart agents that can interact with their environment and solve complex tasks, with real-world applications towards robotics, self-driving cars, and more.
    </Typography>
    <Typography variant='body2'>
        Recent Google Research football environment competition on  <EventDetailsLink> href={"https://www.kaggle.com/c/google-football"}>Kaggle</EventDetailsLink> enabled Machine Learning enthusiasts from all over the world to create AI agents that can play football!
    </Typography>
    <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        About the meetup
    </Typography>
    <Typography variant='body2'>
        We will have great guests - Tom Van de Wiele and Dmitry Gordeev who developed one of the most successful Google Football RL agents. They have gladly agreed to present their solution and insights learned through the process.
    </Typography>
</EventDetails>;

const speakers = [
    {
        name: "Tom Van de Wiele",
        titles: ["Kaggle Competitions Master", "Data Scientist at Intelecy"],
        imagePath: "/images/events/18/tom.jpg",
        children: [
            <IconLinkedIn href="https://www.linkedin.com/in/tom-van-de-wiele-a411a8136/" />,
            <IconKaggle href="https://www.kaggle.com/tvdwiele" />,
        ]
    },
    {
        name: "Dmitry Gordeev",
        titles: ["Kaggle Competitions Grandmaster", "Senior Data Scientist at H2O.ai"],
        imagePath: "/images/events/18/dmitry.jpg",
        children: [
            <IconLinkedIn href="https://www.linkedin.com/in/dmitry-gordeev-50116023/" />,
            <IconKaggle href="https://www.kaggle.com/dott1718" />,
        ]
    },
]

export default function GoogleFootball() {
    return <Event
        id={18}
        title="Reinforcement Learning with Google Football"
        date="December 3rd, 12:00 PM CET"
        imagePath="/images/events/18/Game-Football.jpg"
        zoomLink={"https://us02web.zoom.us/j/88647667218"}
        speakers={speakers}
        details={GoogleFootballDetails}
    >
        <Typography variant='h5' style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle"}}>
            Meetup recording
        </Typography>
        <EventVideo>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/MmVcdfeRYD8" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </EventVideo>
        <div style={{visibility: "hidden"}}>
            <Typography variant='h5' style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle"}}>
                How to join?
            </Typography>
            <Typography variant='body2'>
                Event will be held in <EventBodyLink> href={"https://us02web.zoom.us/j/88647667218"} target="_blank">
                Zoom<span style={{marginLeft: 5}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-5px'}}/></span>
            </EventBodyLink> on December 3rd 12:00 PM CET.
            </Typography>
            <Typography variant='body2'>
                Please use <EventBodyLink onClick={() => window.SleekNote.triggerOnclick('d4137522-667f-4f78-ac0c-ad22a39f9fb6')}>"Sign up for the meetup"</EventBodyLink> button and we will send out an invitation to you!
            </Typography>
            <Typography variant='body2'>
                Alternatively use "Add to Calendar" button above to save the date. See you soon at Riga Data Science Club!
            </Typography>
        </div>
        <Typography variant='h5' style={{paddingTop: '15px', paddingRight: 0, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <span style={{paddingRight: '10px'}}>Google Research Football Environment</span>
            <iframe
                src="https://ghbtns.com/github-btn.html?user=google-research&repo=football&type=star&count=true&size=large"
                frameBorder="0" scrolling="0" width="150" height="30" title="GitHub"></iframe>
        </Typography>
        <EventVideo>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/Uk9p4Kk98_g" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </EventVideo>
    </Event>
}