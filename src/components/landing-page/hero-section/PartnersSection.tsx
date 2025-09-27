import React from "react";
import Collaborators from "../../../assets/events-images/collaborators.png";

const PartnersSection: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <img
          src={Collaborators}
          alt="NSK.AI Collaborators"
          className="h-[400px] md:h-[800px]"
        />
      </div>
    </section>
  );
};

export default PartnersSection;
