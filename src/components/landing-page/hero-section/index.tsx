import HeroSection from "./HeroSection";
import JoinCommunity from "./join-community/JoinCommunity";
import OurStory from "./OurStory";
import Overlay from "../navigation/navbar/Overlay";
import Blog from "../blog/Blog";

const HeroSectionLayout = () => {
  return (
    <>
      <Overlay />
      <div>
        <HeroSection />
        <OurStory />
        <JoinCommunity />
        <Blog />
      </div>
    </>
  );
};

export default HeroSectionLayout;
