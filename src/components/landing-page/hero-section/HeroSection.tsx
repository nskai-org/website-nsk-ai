import { JoinCommunity } from "../../../assets/svg";

const HeroSection = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-6 py-44">
      <h2 className="text-3xl sm:text-5xl max-w-190 text-center">We create ethical & scalable <b>technologies for a better world</b></h2>
      <p className="text-lg font-normal text-center max-w-136 sm:px-10 ">
        On a mission to help 100 million people by solving some of the toughest
        challenges facing humanity.
      </p>
      <img src={JoinCommunity} alt="JoinCommunity" />
    </div>
  );
};

export default HeroSection;
