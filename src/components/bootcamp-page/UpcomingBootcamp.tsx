import React from "react";

const UpcomingBootcamp: React.FC = () => {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Upcoming Bootcamps
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "AI for Sustainable Agriculture",
              desc: "Learn how AI can revolutionize agriculture through precision farming, resource management, and crop optimization.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlYvwT2iqgPlxh9SyfSWcEKDMve-SEhccUw&s",
            },
            {
              title: "AI for Climate Change",
              desc: "Explore AI solutions for climate change, including renewable energy optimization, carbon emission reduction, and environmental monitoring.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmh9V5_RbN1SPgpHLc4LFIJEKOrhKe0HXNA&s",
            },
          ].map((bootcamp, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <img
                src={bootcamp.img}
                alt={bootcamp.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{bootcamp.title}</h3>
                <p className="text-gray-600 mb-4">{bootcamp.desc}</p>
                <button className="px-4 py-2 bg-[#ff0004] text-white rounded-lg hover:bg-[#ff0004]/85 transition cursor-pointer">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UpcomingBootcamp;
