import React from "react";

const BootcampHero: React.FC = () => {
  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">AI RAG Bootcamp</h1>
        <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          Our bootcamp was designed to equip participants with the skills to
          make a real-world impact. It gave our participants the opportunity to
          learn from industry experts and collaborate on projects that address
          real world challenges.
        </p>
        <button
          className="px-6 py-3 bg-[#ff0004] text-white rounded-lg hover:bg-[#ff0004]/85 transition cursor-pointer"
          onClick={() => {
            const section = document.getElementById("testimonials");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Highlights
        </button>
      </section>
    </>
  );
};

export default BootcampHero;
