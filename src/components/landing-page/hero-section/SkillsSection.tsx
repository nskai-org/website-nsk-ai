import React from "react";
import ArchitectureImage from "../../../assets/nskai-bootcamp-images/Ai agent architecture 3hrs .png";

const tools = [
  "LangChain",
  "FastAPI",
  "MongoDB",
  "Chroma",
  "OpenAI",
  "Lightning AI",
  "Ray Serve",
  "Weaviate",
  "Groq",
  "MindsDB",
  "HuggingFace",
  "Supabase",
  "Airflow",
  "Snowflake",
  "Kafka",
  "Redis",
];

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#1e1e1e] rounded-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-6">
        {/* Left Side Image */}

        <div className="flex justify-start">
          <img
            src={ArchitectureImage}
            alt="Bootcamp highlight"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Build mastery through hands-on projects
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Get your hands dirty in real-world projects using cutting-edge
            tools. Work with the latest frameworks and infrastructure to apply
            what you learn in meaningful ways.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-[#ff0004] hover:bg-[#e00003] text-white font-semibold rounded-xl transition">
            See Example
          </button>

          {/* Divider */}
          <div className="my-10 border-t border-gray-700"></div>

          {/* Tools Grid */}
          <h3 className="text-xl font-semibold mb-6">
            Develop skills in a wide range of tooling & infrastructure
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/80 text-white text-center px-1 py-2 rounded-lg shadow hover:shadow-lg hover:bg-[#ff0004] hover:text-white transition"
              >
                {tool}
              </div>
            ))}
          </div>

          {/* Extra Text */}
          <div className="mt-12">
            <h4 className="text-lg font-semibold mb-3">
              Demo Day — your chance to shine!
            </h4>
            <p className="text-gray-300">
              Showcase your project at the closing event in front of industry
              leaders, recruiters, and fellow innovators. This is your
              opportunity to demonstrate technical mastery and create new
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
