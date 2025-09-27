import { useState } from "react";
import { faqData, FAQItem } from "./faqData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" mt-12 text-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Who should attend */}
        <div>
          <h2 className="text-2xl text-[#ff0004] font-bold mb-8">
            Who should attend?
          </h2>
          <div className="space-y-4">
            {faqData.map((item: FAQItem, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 font-semibold text-left text-lg hover:bg-[#ff0004]/10 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.category.toUpperCase()}
                  <span className="text-[#ff0004]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-300">{item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites (can reuse the same data or different data file later) */}
        <div>
          <h2 className="text-2xl text-[#ff0004] font-bold mb-8">
            Prerequisites
          </h2>
          <div className="space-y-4">
            {faqData.map((item: FAQItem, index) => (
              <div
                key={`pre-${index}`}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 font-semibold text-left text-lg hover:bg-[#ff0004]/10 transition"
                  onClick={() => toggleFAQ(index + 100)} // separate state toggle
                >
                  {item.category.toUpperCase()}
                  <span className="text-[#ff0004]">
                    {openIndex === index + 100 ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index + 100 && (
                  <div className="p-4 text-gray-300">{item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
