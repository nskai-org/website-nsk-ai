import React from "react";
import { testimonials } from "./testimonialData";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Testimonials from Our Participants
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Profile Image */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#ff0004]">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Feedback */}
            <p className="text-gray-700 text-sm italic mb-4 text-center">
              "{t.feedback}"
            </p>

            {/* Name + Role */}
            <div className="text-center">
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>

            {/* Accent underline */}
            <div className="mt-4 w-12 h-1 mx-auto bg-[#ff0004] rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
