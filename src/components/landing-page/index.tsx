import JoinCommunity from "./hero-section/join-community/JoinCommunity";
import Blog from "./blog/Blog";
import HeroSectionLayout from "./hero-section";
import Overlay from "./navigation/navbar/Overlay";
import Footer from "./footer/Footer";

const LandingPageLayout = () => {
  return (
    <>
      <Overlay />
      <div>
        <HeroSectionLayout />
        <JoinCommunity />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default LandingPageLayout;
