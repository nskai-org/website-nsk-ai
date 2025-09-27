const HighlightsSection = () => {
  return (
    <section className=" text-black py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className=" rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#ff0004]">
            AI RAG Bootcamp Highlights
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#ff0004]">✔</span>
              Over 1,200 registered participants from more than 10 countries
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff0004]">✔</span>
              Representation from a wide range of industries and tech levels
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff0004]">✔</span>
              Expert lineup of professionals and leaders in AI, ML & Data
              Science
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff0004]">✔</span>
              40+ live sessions, workshops, and expert talks
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff0004]">✔</span>
              Hands-on capstone projects after 6 weeks of learning
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 text-white bg-[#ff0004] rounded-full font-semibold hover:bg-[#e00004] transition">
            See More
          </button>
        </div>

        {/* Right Column */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Next bootcamp promises even better
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            NSKAI Bootcamp 2.0 features career-focused pathways, expert mentors,
            hands-on projects, and deep dives into the latest AI advancements.
          </p>
          <p className="font-semibold text-white mb-6">
            An unforgettable experience across{" "}
            <span className="text-[#ff0004]">2 months</span>!
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">8 WEEKS</h3>
              <p className="text-gray-300">Hands-on Learning</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">2 MONTHS</h3>
              <p className="text-gray-300">Post-Learning & Project Support</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Bootcamp 2.0 begins soon. Stay tuned 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
