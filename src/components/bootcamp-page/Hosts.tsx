import React from "react";
import {
  pioneers,
  members,
  TeamMember,
} from "../landing-page/hero-section/Members";

type TeamSectionProps = {
  pioneers: TeamMember[];
  members: TeamMember[];
};

const TeamSection: React.FC<TeamSectionProps> = ({ pioneers }) => {
  return (
    <section className="py-12 px-6 mt-10">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Meet the Hosts
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {pioneers.map((pioneer, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-red-400 hover:shadow-xs transition text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden border border-red-400 transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-red-500 hover:shadow-xs">
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
    </section>
  );
};

const Hosts: React.FC = () => {
  return (
    <div>
      {/* Team (dynamic import) */}
      <TeamSection pioneers={pioneers} members={members} />
    </div>
  );
};

export default Hosts;
