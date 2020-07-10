import React from "react";
import TopWrapper from "../components/elements/TopWrapper";
import BottomWrapper from "../components/elements/BottomWrapper";
import Footer from "../components/elements/Footer";

export default function JoinUs() {
    return (
        <>
            <TopWrapper hideDivider/>
            <BottomWrapper>
                <div className="typeform-widget" data-url="https://form.typeform.com/to/WGoiY7Ny" style={{width: "100%", height: "800px"}}/>
            </BottomWrapper>
            <Footer />
        </>
    )
}