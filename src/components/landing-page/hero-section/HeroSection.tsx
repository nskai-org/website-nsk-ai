import { Link } from "react-router-dom";
import { JoinCommunity } from "../../../assets/svg";

const HeroSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center gap-6 sm:py-44 py-11"
    >
      {/* Glowing notification */}

      <Link
        to="/projects"
        className="inline-block px-6 py-2 text-sm text-center font-semibold uppercase rounded-full border-2 border-[#ff0004] text-[#ff0004] animate-glow cursor-pointer transition duration-500 hover:bg-[#ff0004]/10 hover:text-red"
        aria-label="Check highlights for our just concluded bootcamp"
      >
        Check highlights for our just concluded bootcamp
      </Link>

      <h2 className="text-3xl sm:text-5xl max-w-190 text-center">
        We create ethical & scalable <b>technologies for a better world</b>
      </h2>
      <p className="text-lg font-normal text-center max-w-136 sm:px-10 ">
        On a mission to help 100 million people by solving some of the toughest
        challenges facing humanity.
      </p>
      <a href="https://bit.ly/Join-NSKAI" target="_blank" rel="noreferrer">
        <img src={JoinCommunity} alt="JoinCommunity" />
      </a>
    </div>
  );
};

export default HeroSection;
