import { link } from "framer-motion/client";
import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const icons = [
  {
    name: "Whatsapp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/+250790194517",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/yourprofile",
  },
  {
    name: "X",
    icon: <FaX />,
    link: "https://x.com/Izere_Manzi2",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/theManzi",
  },
];

const IconsCord = ({ img }) => {
  return (
    <div className="flex mt-8 space-x-3 ml-10">
     
        {icons.map((icons, index) => (
          <a href={icons.link}
            key={index}
            className="text-xl text-red-500 h-10 w-10 justify-items-center p-2 mb-15 mt-5 rounded-xl bg-white/8 hover:bg-red-500 hover:text-white cursor-pointer hover:-translate-y-1 transition duration-300"
          >
            {icons.icon}
          </a>
        ))}
      </div>
   
  );
};

export default IconsCord;
