import { ArrowDown, GetInTouch } from "../../../../assets/svg";

const JoinCommunity = () => {
  return (
    <div data-aos="fade-up" className="py-11 sm:py-28" id="community">
      <h1 className="text-3xl sm:text-5xl font-bold rotate-[2.64deg] mb-14 md:pl-40 text-center md:text-left">
        Get in touch with us
      </h1>
      <div className="flex gap-14 items-center flex-col lg:flex-row">
        <img src="./join-community.svg" alt="JoinUs" />
        <div className="relative">
          <img src={GetInTouch} alt="JoinCommunity" />
          <img
            src={ArrowDown}
            alt="ArrowDown"
            className="absolute top-[-13.5rem] left-[40px] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
