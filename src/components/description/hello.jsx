import React from "react";
import PrimaryBtn from "../Button/primaryBtn";

const Hello = () => {
  return (
    <div className="relative bg-[#020312] italic h-screen max-w-screen w-full overflow-hidden flex px-4 sm:px-8 md:p-16 p-15 text-center sm:text-left md:text-left flex-col justify-center items-center sm:items-start md:items-start">
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
      <div className="relative z-10 space-y-10 sm:space-y-5 text-center md:space-y-7 lg:space-y-10 flex flex-col justify-center items-center md:items-start sm:items-start">
        <h1 className="text-red-500 text-3xl sm:text-2xl md:text-2xl mt-10">
          Hello
        </h1>

        <h1 className="text-white text-6xl sm:text-5xl md:text-7xl lg:text-8xl">
          I'm Josue
        </h1>

        <h1 className="text-red-500 text-5xl sm:text-6xl md:text-8xl">
          101
        </h1>

        <h1 className="text-white text-xl sm:text-lg md:text-2xl mb-8 max-w-xl">
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
