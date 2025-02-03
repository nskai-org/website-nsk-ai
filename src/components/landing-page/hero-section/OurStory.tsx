import { Exclamation, LearnMore, Rectangle } from "../../../assets/svg";

const OurStory = () => {
  return (
    <div className="py-11 sm:py-28 flex md:flex-row flex-col gap-14" data-aos="fade-up">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl sm:text-5xl max-w-51 font-bold rotate-[-5.42deg]">
          Here's our story
        </h1>
        <p className="md:max-w-84 py-2 md:pr-15 rotate-[-2.28deg] font-normal">
          On a mission to help 100 million people by solving some of the
          toughest challenges facing humanity.
        </p>
        <img src={LearnMore} alt="LearnMore" className="w-fit" />
      </div>
      <div className="relative">
        <img src="./our-story-1.svg" alt="Big_Bg"  className="relative z-30"/>
        <img className="absolute top-[-20px] right-[-1rem] w-auto md:left-[-6rem]" src={Exclamation} alt="Exclamation" />
        <img className="absolute top-[-3rem] right-[-3rem] hidden md:block" src={Rectangle} alt="Rectangle" />
      </div>
    </div>
  );
};

export default OurStory;
