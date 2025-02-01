import JoinCommunity from "./hero-section/join-community/JoinCommunity";
import Blog from "./blog/Blog";
import HeroSectionLayout from "./hero-section";
import Overlay from "./navigation/navbar/Overlay";

const LandingPageLayout = () => {
  return (
    <>
      <Overlay />
      <div>
        <HeroSectionLayout />
        <JoinCommunity />
        <Blog />
      </div>
    </>
  );
};

export default LandingPageLayout;
