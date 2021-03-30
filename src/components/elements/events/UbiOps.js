import Event, {EventBodyLink, EventDetails, EventVideo} from "./Event";
import React from "react";
import Typography from "@material-ui/core/Typography";
import IconLinkedIn from "../users/IconLinkedIn";

const UbiOpsDetails = <EventDetails>
    <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        Introduction
    </Typography>
    <Typography variant='body2'>
        In this meetup we will review important concepts and walk through a hands-on tutorial of an MLOps use case! We will show you how easy it is to deploy your model within 5 minutes on a production-grade (Kubernetes) cluster using our platform and make requests to it. No Kubernetes knowledge (or cluster) required! How? Raoul Fasel of UbiOps will walk you through the steps in this session.
    </Typography>
</EventDetails>;

const speakers = [
    {
        name: "Raoul Fasel",
        titles: [
            "Data Scientist",
        ],
        imagePath: "/images/events/27/raoul_fasel.jpg",
        children: [
            <IconLinkedIn href="https://www.linkedin.com/in/raoul-fasel-1b33a7a4/" />,
        ]
    }
]

const AddToCalendar = <div title="Add to Calendar" className="addeventatc">
    Add to Calendar
    <span className="start">2021-04-15 13:00</span>
    <span className="end">2021-04-15 14:00</span>
    <span className="timezone">Europe/Riga</span>
    <span className="title">Introduction to MLOps and a model deployment tutorial</span>
    <span className="description">
                                        Join us online with Zoom: https://us02web.zoom.us/j/83248505122?pwd=ZXdWMXZQdW5vYm1SbGc5Y3FqL1JEQT09
                                        <br/><br/>
                                        In this meetup we will review important concepts and walk through a hands-on tutorial of an MLOps use case! We will show you how easy it is to deploy your model within 5 minutes on a production-grade (Kubernetes) cluster using our platform and make requests to it. No Kubernetes knowledge (or cluster) required!
                                        <br/><br/>
                                        How? Raoul Fasel of UbiOps will walk you through the steps in this session.
                                    </span>
    <span className="location">https://us02web.zoom.us/j/83248505122?pwd=ZXdWMXZQdW5vYm1SbGc5Y3FqL1JEQT09</span>
</div>

export default function UbiOps() {
    return <Event
        id={27}
        title="Introduction to MLOps and a model deployment tutorial"
        date="April 15th, 12:00 PM CET"
        imagePath="/images/events/27/ubiops_thumbnail.png"
        zoomLink={"https://us02web.zoom.us/j/83248505122?pwd=ZXdWMXZQdW5vYm1SbGc5Y3FqL1JEQT09"}
        speakers={speakers}
        details={UbiOpsDetails}
        speakersTitle="Speakers"
        addToCalendar={AddToCalendar}
    >
        <div>
            <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                About the speaker:
            </Typography>
            <Typography variant='body2'>
                Raoul Fasel, an experienced data scientist and engineer with a wide variety of knowledge of data science and infra. Having experienced first hand the difficulties of developing and deploying a large variety of ML models, he now helps our users solve those issues. Raoul will be your guide to deploy an image recognition model with ease.
            </Typography>
            <Typography variant='h5' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                About UbiOps:
            </Typography>
            <Typography variant='body2'>
                Started off as a data science company developing models, we soon realised that proper deployment is easier said than done. We pivoted, iterated, and started to build software to solve that: UbiOps.
                UbiOps is a deployment, serving and management backend for your data science and data processing code. It is there to help you create production-grade data-driven applications with ease.
            </Typography>
            <Typography variant='h5' style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle"}}>
                How to join?
            </Typography>
            <Typography variant='body2'>
                Event will be held in <EventBodyLink href={"https://us02web.zoom.us/j/83248505122?pwd=ZXdWMXZQdW5vYm1SbGc5Y3FqL1JEQT09"} target="_blank">
                Zoom<span style={{marginLeft: 5}}><img src={`${process.env.PUBLIC_URL}/images/events/zoom.png`} width={25} height={25} style={{marginBottom: '-5px'}}/></span>
            </EventBodyLink> on April 15th 12:00 PM CET.
            </Typography>
            <Typography variant='body2' style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                Use "Add to Calendar" button above to save the date. See you soon at Riga Data Science Club!
            </Typography>
        </div>
        <Typography variant='h5' style={{paddingTop: '15px', paddingRight: 0, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <span style={{paddingRight: '10px'}}>Introduction to UbiOps</span>
        </Typography>
        <EventVideo>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/7Y-OaELOcAg" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </EventVideo>
    </Event>
}