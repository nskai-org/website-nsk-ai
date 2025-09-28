import React from "react";

import testimonialVideo from "../../assets/testimonial-video/testimonial-video-compressed.mp4";

type TestimonialVideoProps = {
  caption?: string; // Optional caption under the video
};

const TestimonialVideo: React.FC<TestimonialVideoProps> = ({ caption }) => {
  return (
    <div
      id="testimonials"
      className="max-w-3xl mx-auto p-6 rounded-2xl bg-white"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
        What Our Participants <br /> Had to Say
      </h2>

      <div className="relative w-full overflow-hidden rounded-xl">
        <video
          className="w-full h-[600px] rounded-xl"
          controls
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
        >
          <source src={testimonialVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {caption && (
        <p className="mt-4 text-center text-gray-600 italic">{caption}</p>
      )}
    </div>
  );
};

export default TestimonialVideo;
