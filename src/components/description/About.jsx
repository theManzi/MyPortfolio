import React from "react";
import PrimaryBtn from "../Button/primaryBtn";
import Tittle from "./tittle.jsx";

const About = () => {
  const languages = [
    { name: "JavaScript", imgSrc: "/js.png" },
    { name: "Python", imgSrc: "/python.png" },
    { name: "CSS", imgSrc: "/css.png" },
    { name: "C++", imgSrc: "/c++.png" },
    { name: "ReactJS", imgSrc: "/react.png" },
    { name: "HTML", imgSrc: "/html.png" },
  ];

  return (
    <div className="bg-[#020312] py-16 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-10 justify-center items-center">
        
          <div className="bg-white xl:w-100 xl:h-100 sm:w-30 sm:h-30 md:h-70 md:w-70 flex justify-center image-center overflow-hidden border-4 border-white/20 shadow-lg max-w-screen">
            <img
              src="/manzi.jpg"
              alt="profile"
              className="xl:w-80 xl:h-80 sm:w-30 sm:h-30 md:h-60 md:w-60 rounded-full mt-8"
            />
          </div>
        

      
        <div className="text-center md:text-left max-w-2xl space-y-5">
          <Tittle head1="About Me" head2="Hi, My name is Josue101 !!" />
          <p className="text-white/60 text-base sm:text-lg leading-relaxed italic">
            I am a B.Tech First Year Student of Kepler College, pursuing my
            degree in Information System. I have a keen interest in problem
            solving and finding new, dynamic ideas.
            <br />
            <br />I am a Machine Learning enthusiast and Front-end Web
            Developer. I can provide clean code and pixel-perfect design.
          </p>

          <div className="text-white italic text-base sm:text-lg">
            <ul className="grid grid-cols-2 gap-y-2 list-disc list-inside">
              <li>Problem Solving</li>
              <li>DSA</li>
              <li>Machine Learning</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-start mt-4">
            <PrimaryBtn name="Contact Me" link="/Contact" />
          </div>
        </div>
      </div>

      
      <div className="mt-20">
        <h1 className="text-white italic text-3xl sm:text-4xl text-center">
          Languages
        </h1>
        <div className="h-1 w-24 bg-red-500 rounded-2xl mx-auto mt-3"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {languages.map((language, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2 hover:translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src={language.imgSrc}
                  alt={language.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h2 className="text-white italic text-lg sm:text-xl">
                {language.name}
              </h2>
              <div className="group-hover:bg-red-500 h-1 w-12 sm:w-16 bg-transparent rounded-2xl mt-1 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
