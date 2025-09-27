import JoinCommunity from "./hero-section/join-community/JoinCommunity";
import Blog from "./blog/Blog";
import HeroSectionLayout from "./hero-section";
import Overlay from "./navigation/navbar/Overlay";
import Footer from "./footer/Footer";
import Team from "./hero-section/Team";
import HighlightsSection from "./hero-section/HighlightsSection";
import FAQSection from "./hero-section/FaqSection";
import SkillsSection from "./hero-section/SkillsSection";
import GuestSpeakers from "./hero-section/GuestSpeakers";
import TestimonialVideo from "../bootcamp-page/VideoTestimonial";

const LandingPageLayout = () => {
  return (
    <>
      <Overlay />
      <div>
        <HeroSectionLayout />
        <HighlightsSection />
        <SkillsSection />
        <FAQSection />
        <Team />
        <GuestSpeakers />
        <TestimonialVideo />
        <Blog />
        <JoinCommunity />
        <Footer />
      </div>
    </>
  );
};

export default LandingPageLayout;
