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
    {
        name: "Isabella I. Douzoglou",
        titles: [
            "Researcher in Biophysics & AI",
            "Biophysics & AI Ph.D. Student",
            "Bioinformatics & Systems Biology MSc.",
            "Computer Science B.A., Communications B.S.",
        ],
        imagePath: "/images/events/19/isabella.jpeg",
        children: [
            <IconLinkedIn href="https://www.linkedin.com/in/isabella-i-douzoglou-b7953b6b/" />,
        ]
    }
]

const AddToCalendar = <div title="Add to Calendar" className="addeventatc">
    Add to Calendar
    <span className="start">2020-12-17 13:00</span>
    <span className="end">2020-12-17 14:00</span>
    <span className="timezone">Europe/Riga</span>
    <span className="title">Predicting Protein Structure with AlphaFold</span>
    <span className="description">
                                        Join us online with Zoom: https://us02web.zoom.us/j/87067598518
                                        <br/><br/>
                                        Protein structure prediction is of fundamental importance as the structure of a protein largely determines its function, however, protein structures can be difficult to determine experimentally.
                                        <br/><br/>
                                        In the recent Critical Assessment of Protein Structure Prediction (CASP14), DeepMind's AlphaFold 2 has shown it can guess how certain proteins will fold themselves with surprising accuracy.
                                        <br/><br/>
                                        <ol>
                                            <li>We will give general concepts of protein structure prediction and a brief overview of CASP.</li>
                                            <li>We will go through previous version of Alpha Fold and discuss what could be the architecture of Alpha Fold 2.</li>
                                            <li>We will have open discussion and QA session with our honorable guests, Alfonso Valencia, one of the CASP14 jury members among them!</li>
                                        </ol>
                                    </span>
    <span className="location">https://us02web.zoom.us/j/87067598518</span>
</div>

export default function AlphaFold() {
    return <Event
        id={19}
        title="Predicting Protein Structure with AlphaFold"
        date="December 17th, 12:00 PM CET"
        imagePath="/images/events/19/protein-folding.jpg"
        zoomLink={"https://us02web.zoom.us/j/87067598518"}
        speakers={speakers}
        details={GoogleFootballDetails}
        speakersTitle="Guests"
        addToCalendar={AddToCalendar}
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
                Please use <EventBodyLink href="#" onClick={() => window.SleekNote.triggerOnclick('7aedd630-01be-4749-9e7f-66d4375c9329')}>"Sign up for the meetup"</EventBodyLink> button and we will send out an invitation to you!
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