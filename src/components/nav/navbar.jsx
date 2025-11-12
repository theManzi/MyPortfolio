import React, { useState } from "react";
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
    
  const [menuOpen, setMenuOpen] = useState(false)
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
    setMenuOpen(false);
  };
    return (
      <nav className="fixed top-0 left-0 gap-4 italic bg-black border-b border-white/50 px-8 pt-1 w-screen z-50 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl text-white  ">
          Portfo<span className="text-red-500 ">lio</span>
        </h1>

        {/* desktop menu */}
        <div className="hidden md:flex gap-4">
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

          {/* Hamburger Icon (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="bg-black w-full flex flex-col items-center md:hidden border-t border-white/10">
          {navitems.map((nav, index) => (
            <h1
              key={index}
              className="text-white text-lg w-full text-center py-3 hover:bg-red-500 duration-300 cursor-pointer"
              onClick={() => handleNavigation(nav.id)}
            >
              {nav.name}
            </h1>
          ))}
        </div>
      )}

        </nav>
    );
  };

export default Navbar;
