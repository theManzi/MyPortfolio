import React from "react";
import PrimaryBtn from "../Button/primaryBtn";
import Tittle from "./tittle.jsx";

const About = () => {
  const languages = [
    {
      name: "JavaScript",
      imgSrc: "/js.png",
    },
    {
      name: "Python",
      imgSrc: "/python.png",
    },
    {
      name: "CSS",
      imgSrc: "/css.png",
    },
    {
      name: "C++",
      imgSrc: "/c++.png",
    },

    {
      name: "reactJS",
      imgSrc: "/react.png",
    },
    {
      name: "HTML",
      imgSrc: "/html.png",
    },
  ];
  return (
    <div className="bg-[#020312] mt-15">
      <div className="flex space-x-10 bg-[#020312]  items-center justify-center p-5">
        <div className="m-5 p-18 px-20  bg-white">
          <div className="w-80 h-80 rounded-full">
            <img
              src="/manzi.jpg"
              alt="profile"
              className="w-80 h-80 rounded-full "
            />
          </div>
        </div>
        <div className="m-20 bg-[#020312] rounded-lg space-y-2">
          <Tittle head1="About Me" head2="Hi, My name is Josue101 !!" />
          <p className="text-xl italic text-white/40">
            I am a B.Tech First Year Student of Kepler College, Pursuing My Degree
            in Information System . I have a keen Interest in Problems Solving and Finding new
            and Dynamic Ideas.<br></br>
            <br></br>I am a Machine Learning Enthusiast & Front-end Web
            Developer. I can provide clean code and pixel perfect design.
            <br></br>
            <br></br>
          </p>
          <div className="text-xl italic text-white mb-10">
            1. Problem Solving &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. DSA
            <br></br>
            3. Machine Learning &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            4. Web Development
          </div>
          <PrimaryBtn name="Contact Me" link="/Contact" />
        </div>
      </div>
      <div>
        <h1 className="text-white italic text-4xl text-center">Laguages</h1>
        <div className="h-1 w-25 block bg-red-500 rounded-2xl ml-145 mt-4"></div>
        <div className="grid grid-cols-3 items-center justify-center gap-10 space-y-10 p-20 ">
          {languages.map((language, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2 hover:translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden w-23 h-23 bg-white rounded-full flex items-center justify-center ">
                <img
                  src={language.imgSrc}
                  alt={language.name}
                  className="w-12 h-12 z-10"
                />
                <div className="absolute top-0 left-0 w-12 h-24 bg-gray-700/60 block"></div>
              </div>

              <h2 className="text-white italic text-2xl">{language.name}</h2>
              <div className="group-hover:bg-red-500 h-1 w-20 block rounded-2xl ml-3 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
