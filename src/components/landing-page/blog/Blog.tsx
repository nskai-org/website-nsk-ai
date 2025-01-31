const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold rotate-[-3.57deg] text-center mb-11">
          Check out our blog
        </h1>
      <div className="grid grid-rows-2 grid-cols-2">
        <div className="bg-[url(/blog_1.svg)] h-166 w-124 row-span-3"></div>
        <div className="bg-[url(/blog_2.svg)] h-75 w-128"></div>
        <div className="bg-[url(/blog_3.svg)] h-75 w-128"></div>
      </div>
    </div>
  );
};

export default Blog;
