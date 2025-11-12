import React from 'react'
import PrimaryBtn from '../Button/primaryBtn';

const Hello = () => {
  return (
    <div className="bg-[#020312] p-10  pt-25 italic relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 space-y-3">
        <h1 className="text-red-500 text-2xl mt-10 ">Hello</h1>
        <h1 className="text-white text-8xl ">I'm Josue</h1>
        <h1 className="text-red-500 text-8xl ">101</h1>
        <h1 className="text-white text-2xl mb-8">
          A Software Developer And Programming Enthusiast
        </h1>
        <PrimaryBtn name="Download Resume" link="#" />
      </div>
    </div>
  );
}

export default Hello