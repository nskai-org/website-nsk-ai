import { ArrowDown, GetInTouch } from "../../../../assets/svg";

const JoinCommunity = () => {
  return (
    <div data-aos="fade-up" className="py-28">
      <h1 className="text-5xl font-bold rotate-[2.64deg] mb-14 pl-40">
        Get in touch with us
      </h1>
      <div className="flex gap-14 items-center ">
        <img src="./join-community.svg" alt="JoinUs" />
        <div className="relative">
          <img src={GetInTouch} alt="JoinCommunity"/>
          <img src={ArrowDown} alt="ArrowDown" className="absolute top-[-13.5rem] left-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
