import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const icons = [
  { name: "Facebook", icon: <FaFacebook /> },
  { name: "Whatsapp", icon: <FaWhatsapp /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "Linkedin", icon: <FaLinkedin /> },
   ]

const IconsCord = ({ img }) => {
  return (
    <div className="flex mt-8 space-x-3 ml-10">
     
        {icons.map((icons, index) => (
          <div
            key={index}
            className="text-xl text-red-500 h-10 w-10 justify-items-center p-2 mb-15 mt-5 rounded-xl bg-white/8 hover:bg-red-500 hover:text-white cursor-pointer hover:-translate-y-1 transition duration-300"
          >
            {icons.icon}
          </div>
        ))}
      </div>
   
  );
};

export default IconsCord;
