import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

  const navitems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "achievements" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

const Navbar = () => {
    
  const location = useLocation();
  const navigate = useNavigate();

    const scrollToSection = (id, offset = 100) => {
      const section = document.getElementById(id);
      if (section) {
        // section.scrollIntoView({ behavior: "smooth" });
        const yOffset = -offset;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });


      }
  };
  

  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
    return (
      <div className="fixed top-0 left-0 flex items-center gap-4 justify-between italic bg-black border-b border-white/50 px-8 pt-1 w-full z-50">
       
        <h1 className="text-2xl text-white  ">
          Portfo<span className="text-red-500 ">lio</span>
        </h1>

        <div className="flex gap-1">
          {navitems.map((nav, index) => (
            <h1
              key={index}
              className="text-white text-xl px-6 py-2 hover:bg-red-500 duration-300 rounded-lg cursor-pointer"
              onClick={() => handleNavigation(nav.id)}
            >
              {nav.name}
            </h1>
          ))}
        </div>
      </div>
    );
  };

export default Navbar;
