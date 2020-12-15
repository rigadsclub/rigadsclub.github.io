import React from 'react';
import PastEvent from "../components/elements/events/PastEvent";


export default {
    title: 'Events/PastEvent',
    component: PastEvent,
};

const Template = (args) => <PastEvent {...args} />;

export const GoogleFootball = Template.bind({});
GoogleFootball.args = {
    id: "gfootball",
    title: "Reinforcement Learning with Google Research Football",
    imageURL: "/images/events/18/Game-Football.jpg",
};
