import React from "react";

const FirstCord = ({ img, campany, position, p1, p2 }) => {
  return (
    <div className="group bg-[#020312] italic flex justify-center">
      <div className="group-hover:border-t-[3px] group-hover:border-red-500 rounded-xl hover:-translate-y-2 transition-transform duration-300 bg-white/10 cursor-pointer w-full sm:w-[22rem] md:w-[24rem] lg:w-[26rem] p-6 shadow-lg">
        <div className="flex flex-col items-center text-center space-y-3">
          {/* Image */}
          <img
            src={img}
            alt={campany}
            className="w-56 h-36 rounded-2xl mb-3 object-cover"
          />

          {/* Company Name */}
          <h2 className="text-white text-xl sm:text-2xl font-semibold group-hover:text-red-500 transition-colors duration-300">
            {campany}
          </h2>

          {/* Position */}
          <h3 className="text-red-500 text-base sm:text-lg font-medium">
            {position}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {p1}
          </p>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {p2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstCord;
