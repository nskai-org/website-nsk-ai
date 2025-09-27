import React from "react";
import { pioneers, members, TeamMember } from "../hero-section/Members";

type TeamSectionProps = {
  pioneers: TeamMember[];
  members: TeamMember[];
};

const TeamSection: React.FC<TeamSectionProps> = ({ pioneers, members }) => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Meet the Team
      </h2>

      {/* Chief Pioneers */}
      <h3 className="text-xl font-semibold text-center mb-6 text-[#ff0004]">
        Board of Directors
      </h3>
      {/* Chief Pioneers */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {pioneers.map((pioneer, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-red-400 hover:shadow-xs transition text-center group"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden border border-red-400 transform transition duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-red-500 group-hover:shadow-xs">
              {pioneer.img && (
                <img
                  src={pioneer.img}
                  alt={pioneer.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h4 className="font-bold">{pioneer.name}</h4>
            <p className="text-sm text-gray-600">{pioneer.role}</p>
          </div>
        ))}
      </div>

      {/* Other Members */}
      <h3 className="text-xl font-semibold text-center mb-6 text-[#ff0004]">
        Team Members
      </h3>
      {/* Other Members */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-2xl shadow-red-400 hover:shadow-xs transition text-center"
          >
            <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full overflow-hidden transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-red-500 hover:shadow-xs">
              {member.img && (
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h4 className="font-semibold">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Team: React.FC = () => {
  return (
    <div>
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          About the concluded Bootcamp
        </h2>
        <p className="max-w-3xl mx-auto text-base text-justify mb-6">
          Our just completed bootcamp was designed to equip participants with
          hands-on experience in AI, software development, and scalable
          technologies. The bootcamp trainings were held via Google Meet and
          Zoom, spread across six weeks. Participants got the opportunity to
          learn from top engineers from across the world, work on real-world
          challenges, and collaborate with peers to solve problems.
        </p>
        <button
          className="px-6 py-3 bg-[#ff0004] text-white rounded-lg hover:bg-[#ff0004]/85 transition cursor-pointer"
          onClick={() => {
            const section = document.getElementById("testimonials");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Check out the Testimonials
        </button>
      </section>

      {/* Features */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-12">What You’ll Gain</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Mentorship from experts",
            "Hands-on real world projects",
            "Networking opportunities",
            "Certification on completion",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-2 md:px-1 border-2 border-gray-200 rounded-2xl"
            >
              <h3 className="font-semibold text-lg">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Team (dynamic import) */}
      <TeamSection pioneers={pioneers} members={members} />

      {/* Call to Action */}
      {/* <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Build the Future?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Be part of the mission to impact 100 million lives. Learn, create, and
          innovate with us at NSK.AI Bootcamp.
        </p>
        <button className="bg-[#ff0004] text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-md hover:opacity-90 transition">
          Register Now
        </button>
      </section> */}
    </div>
  );
};

export default Team;
