import Members from "../components/Members";
import React from "react";
import Projects from "./Projects";

export default function Home() {
    return (
        <div>
            <h2>Members</h2>
            <Members />
            <h2>Projects</h2>
            <Projects />
        </div>
    );
}