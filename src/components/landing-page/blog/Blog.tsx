import { BlogItems } from "./BlogItems";
import { HorizontalLine, VerticalLine } from "../../../assets/svg";

const Blog = () => {
  return (
    <div className="py-11 sm:py-28">
      <h1 className="text-3xl sm:text-5xl font-bold rotate-[-3.57deg] text-center mb-11">
        Check out our blog
      </h1>
      <div className="grid md:grid-rows-2 md:grid-cols-2 grid-rows-3 md:gap-6 gap-y-6 relative">
        <img
          className="absolute left-[49.5%] hidden md:block"
          src={VerticalLine}
          alt=""
        />
        <img
          className="absolute top-[50%] right-[-35px] hidden md:block"
          src={HorizontalLine}
          alt=""
        />
        {BlogItems.map((item, idx) => (
          <div
            key={idx}
            className={`bg[url(${item.img})] bg-no-repeat bg-cover relative ${
              idx == 0 ? "md:row-span-2 md:h-166 h-88" : "md:h-full md:w-128"
            }`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div
              className={`absolute ${
                idx == 0
                  ? "top-22 left-12"
                  : idx == 1
                  ? "bottom-14 left-7"
                  : "right-6 bottom-6"
              }`}
            >
              <h2 className="text-4xl font-bold mb-3">{item.heading}</h2>
              <p
                className={`text-[#12171D] font-normal text-2xl ${
                  idx == 2 ? "max-w-49" : "max-w-81"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
