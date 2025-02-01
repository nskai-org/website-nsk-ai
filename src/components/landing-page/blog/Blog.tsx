import { BlogItems } from "./BlogItems";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold rotate-[-3.57deg] text-center mb-11">
        Check out our blog
      </h1>
      <div className="grid grid-rows-2 grid-cols-2">
        {BlogItems.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[url(${
              item.img
            })] h-166 w-124 w-128 bg-no-repeat relative ${
              idx == 0 ? "row-span-3" : "h-full w-128"
            }`}
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
