import React from "react";
import Overlay from "../landing-page/navigation/navbar/Overlay";
import BootcampHero from "./BootcampHero";
import JustConcludedBootcamp from "./JustConcludedBootcamp";
import GuestSpeakers from "../landing-page/hero-section/GuestSpeakers";
import Footer from "../landing-page/footer/Footer";
import Hosts from "./Hosts";
import TestimonialVideo from "./VideoTestimonial";
import PartnersSection from "../landing-page/hero-section/PartnersSection";

const BootcampPageLayout: React.FC = () => {
  return (
    <>
      <Overlay />
      <div>
        <BootcampHero />
        <JustConcludedBootcamp />
        <Hosts />
        <GuestSpeakers />
        <TestimonialVideo />
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
};

export default BootcampPageLayout;
