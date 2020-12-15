import Event, {EventBodyLink, EventDetails, EventDetailsLink, EventVideo} from "./Event";
import React from "react";
import Typography from "@material-ui/core/Typography";
import IconLinkedIn from "../users/IconLinkedIn";
import IconWikipedia from "../users/IconWikipedia";

const GoogleFootballDetails = <EventDetails>
    <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        Introduction
    </Typography>
    <Typography variant='body2'>
        Protein structure prediction is of fundamental importance as the structure of a protein largely determines its function, however, protein structures can be difficult to determine experimentally.
        In the recent Critical Assessment of Protein Structure Prediction (CASP14), DeepMind's AlphaFold 2 has shown it can guess how certain proteins will fold themselves with surprising accuracy.
    </Typography>
    <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        About the meetup
    </Typography>
    <Typography variant='body2'>
        We will go though general concepts of protein structure prediction followed by a brief overview of CASP. Then we will take a closer look at what previous Alpha Fold was and what Alpha Fold 2 is.
    </Typography>
    <Typography variant='body2'>
        We will have Alfonso Valencia, one of the CASP14 jury members among our guests!
    </Typography>
</EventDetails>;

const speakers = [
    {
        name: "Alfonso Valencia",
        titles: [
            "ICREA Professor",
            "CASP14 Assessor",
            "Life Sciences department director at Barcelona Supercomputing Center",
            "Director of the Spanish National Bioinformatics Institute",

        ],
        imagePath: "/images/events/19/alfonso-valencia.jpg",
        children: [
            <IconLinkedIn href="https://www.linkedin.com/in/alfonsovalencia/" />,
            <IconWikipedia href="https://en.wikipedia.org/wiki/Alfonso_Valencia" />,
        ]
    },
]

export default function GoogleFootball() {
    return <Event
        id={19}
        title="Predicting Protein Structure with AlphaFold"
        date="December 17th, 12:00 PM CET"
        imagePath="/images/events/19/protein-folding.jpg"
        zoomLink={"https://us02web.zoom.us/j/87067598518"}
        speakers={speakers}
        details={GoogleFootballDetails}
        speakersTitle="Guests"
    >
        <div>
            <Typography variant='h5' style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle"}}>
                How to join?
            </Typography>
            <Typography variant='body2'>
                Event will be held in <EventBodyLink href={"https://us02web.zoom.us/j/87067598518"} target="_blank">
                Zoom<span style={{marginLeft: 5}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-5px'}}/></span>
            </EventBodyLink> on December 17th 12:00 PM CET.
            </Typography>
            <Typography variant='body2'>
                Please use <EventBodyLink onClick={() => window.SleekNote.triggerOnclick('d4137522-667f-4f78-ac0c-ad22a39f9fb6')}>"Sign up for the meetup"</EventBodyLink> button and we will send out an invitation to you!
            </Typography>
            <Typography variant='body2'>
                Alternatively use "Add to Calendar" button above to save the date. See you soon at Riga Data Science Club!
            </Typography>
        </div>
        <Typography variant='h5' style={{paddingTop: '15px', paddingRight: 0, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <span style={{paddingRight: '10px'}}>AlphaFold: The making of a scientific breakthrough</span>
        </Typography>
        <EventVideo>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/gg7WjuFs8F4" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </EventVideo>
    </Event>
}