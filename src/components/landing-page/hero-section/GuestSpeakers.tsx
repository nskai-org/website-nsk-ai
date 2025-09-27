import React from "react";
import { guestSpeakers } from "./guestSpeakersData";

const GuestSpeakers: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Guest Speakers from{" "}
        <span className="text-[#ff0004]">AI RAG Bootcamp</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-2">
        {guestSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="h-80 flex flex-col px-2 items-center justify-center text-center group transition duration-300 border border-gray-300 rounded-xl"
          >
            {/* Speaker Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-100 group-hover:border-[#ff0004] transition duration-300">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Speaker Info */}
            <h3 className="text-lg font-semibold group-hover:text-[#ff0004] transition duration-300">
              {speaker.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{speaker.role}</p>
            <p className="text-sm font-medium text-gray-800">
              {speaker.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestSpeakers;
