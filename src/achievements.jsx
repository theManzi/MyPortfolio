import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCards = () => {
  const projects = [
    {
      name: "Portfolio Website",
      type: "Frontend",
      tech: "React, Tailwind CSS",
      desc: "Personal portfolio website with smooth scroll and animations.",
    },
    {
      name: "Task Manager API",
      type: "Backend",
      tech: "Node.js, Express, MongoDB",
      desc: "A RESTful API to manage daily tasks efficiently.",
    },
    {
      name: "E-commerce Store",
      type: "Fullstack",
      tech: "Next.js, Firebase, Stripe",
      desc: "Online store with payment integration and admin dashboard.",
    },
    {
      name: "Chat App",
      type: "Mobile",
      tech: "React Native, Firebase",
      desc: "Cross-platform chat app with real-time messaging.",
    },
  ];

  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((proj) => proj.type === selectedType);

  return (
    <div className="bg-[#020312] text-white py-10 px-6 min-h-screen">
      <h1 className="text-4xl mt-5 font-bold text-center mb-8">
        My <span className="text-red-500">Projects</span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Frontend", "Backend", "Fullstack", "Mobile"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setSelectedType(type)}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ef4444",
              color: "#fff",
            }}
            whileTap={{ scale: 0.9 }}
            className={`px-5 py-2 rounded-lg border transition-all duration-300 ${
              selectedType === type
                ? "bg-red-500 border-red-500 text-white"
                : "border-gray-600 hover:bg-gray-800"
            }`}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Cards Section */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((proj, i) => (
            <motion.div
              key={proj.name}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-700 p-5 rounded-2xl hover:-translate-y-2 hover:shadow-red-500/20 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                {proj.name}
              </h2>
              <p className="text-gray-300 text-sm mb-1">{proj.tech}</p>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
              <span className="text-gray-500 text-xs italic mt-2 block">
                {proj.type}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectCards;
