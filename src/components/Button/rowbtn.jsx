import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // use react-icons for an arrow icon

const Rowbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-xl cursor-pointer shadow-lg hover:bg-red-600 duration-300 z-50"
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

export default Rowbtn;
