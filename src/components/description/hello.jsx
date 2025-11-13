import React from "react";
import PrimaryBtn from "../Button/primaryBtn";

const Hello = () => {
  return (
    <div className="relative bg-[#020312] italic h-screen w-full overflow-hidden flex px-4 sm:px-8 md:p-16 p-15">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 sm:text-left space-y-3 sm:space-y-5">
        <h1 className="text-red-500 text-lg sm:text-xl md:text-2xl mt-10">
          Hello
        </h1>

        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          I'm Josue
        </h1>

        <h1 className="text-red-500 text-5xl sm:text-6xl md:text-8xl">
          101
        </h1>

        <h1 className="text-white text-base sm:text-lg md:text-2xl mb-8 max-w-xl">
          A Software Developer and Programming Enthusiast
        </h1>

        <div className="flex sm:justify-start md:justify-start" >
          <PrimaryBtn name="Download Resume" link="#" />
        </div>
      </div>
    </div>
  );
};

export default Hello;
