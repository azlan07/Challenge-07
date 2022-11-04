import React from "react";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import GetStarted from "../components/GetStarted";
import Faq from "../components/Faq";

const LandingPage = () => {
    return(
        <>
            <OurServices/>
            <WhyUs/>
            <Testimonial/>
            <GetStarted/>
            <Faq/>
        </>
    )
}

export default LandingPage;