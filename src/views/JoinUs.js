import React from "react";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Footer from "../components/elements/Footer";

export default function JoinUs() {
    return (
        <>
            <TopWrapper hideDivider/>
            <BottomWrapper>
                <ReactTypeformEmbed popup={false} style={{position: "unset", display: "block", width: '100%', height: '800px'}} url="https://form.typeform.com/to/WGoiY7Ny" />
            </BottomWrapper>
            <Footer />
        </>
    )
}