import React, { useEffect, useState } from "react";
import AIRAGBOOTCAMPFLYER from "../../assets/nskai-bootcamp-images/NSK.AI Bootcamp Flyer.jpeg";

const JustConcludedBootcamp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock/unlock body scroll when modal state changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [isOpen]);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Just Concluded</h2>
      <div className="grid md:grid-cols-2 gap-6 items-center bg-white shadow-sm rounded-lg p-6">
        <img
          src={AIRAGBOOTCAMPFLYER}
          alt="AI RAG Bootcamp Flyer for NSKAI"
          className="w-full h-56 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#ff0004]">
            AI RAG Bootcamp
          </h3>
          <p className="text-gray-600 mb-4">
            The AI RAG Bootcamp is an intensive, hands-on program designed to
            help participants master Retrieval-Augmented Generation (RAG) — a
            powerful AI approach that combines large language models with
            external knowledge sources. Over the course of the bootcamp,
            learners gain practical skills in building intelligent systems that
            can retrieve, reason, and generate context-aware responses.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="px-2 md:px-4 py-2 border rounded-lg text-white bg-[#ff0004] hover:bg-[#ff0004]/85 transition duration-300 cursor-pointer"
            >
              View Recap
            </button>
            <a href="https://nskaicertificate.vercel.app/" target="_blank">
              <button className="px-2 md:px-4 py-2 border rounded-lg text-white bg-[#ff0004] hover:bg-[#ff0004]/85 transition duration-300 cursor-pointer">
                Get Certificate
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4 text-[#ff0004]">
              AI RAG Bootcamp Recap
            </h2>
            <p className="text-gray-600 mb-4">
              Our AI RAG Bootcamp brought together passionate learners and
              experts to explore how Retrieval-Augmented Generation is shaping
              the future of AI. From hands-on workshops to collaborative project
              building, participants developed practical solutions in education,
              healthcare, and business automation.
            </p>
            <p className="text-gray-600 mb-6">
              The bootcamp concluded with inspiring demos and presentations that
              showcased how RAG can make AI systems more reliable, grounded, and
              impactful.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[#ff0004] text-white rounded-lg hover:bg-[#ff0004]/85 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default JustConcludedBootcamp;
