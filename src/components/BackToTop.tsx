import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // optional icon (lucide-react)

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-[#ff0004] text-white shadow-lg hover:bg-[#ff0004]/85 transition duration-300 cursor-pointer"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default BackToTop;
