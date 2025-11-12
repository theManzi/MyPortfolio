import React, { useState } from "react";
import Tittle from "../components/description/tittle";

const MyProjectsTable = () => {
  const baseProjects = [
    {
      name: "Portfolio Website",
      tech: "React, Tailwind CSS",
      description: "Personal website to showcase my skills and projects.",
      publisher: "Josue",
    },
    {
      name: "Task Manager App",
      tech: "React, Node.js, MongoDB",
      description: "A simple full-stack CRUD app for managing tasks.",
      publisher: "Josue",
    },
    {
      name: "E-commerce Store",
      tech: "Next.js, Stripe, Firebase",
      description: "A responsive online store with payment integration.",
      publisher: "Josue",
    },
    {
      name: "Machine Learning",
      tech: "Python",
      description: "Dog's Breed Classification.",
      publisher: "Josue",
    },
  ];

  // Duplicate to make 50+ rows
  const myproject = Array.from({ length: 9 }).flatMap((_, i) =>
    baseProjects.map((proj) => ({
      ...proj,
      name: `${proj.name} ${i + 1}`,
    }))
  );

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(myproject.length / projectsPerPage);

  // Calculate which projects to show
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = myproject.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll up when page changes
    }
  };

  return (
    <div className="overflow-x-auto p-10 text-center bg-[#020312] min-h-screen">
      <Tittle head1="My Projects" />

      <table className="min-w-full bg-black border border-gray-700 rounded-lg overflow-hidden text-left">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="py-3 px-4">Project Name</th>
            <th className="py-3 px-4">Tech Used</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((proj, index) => (
            <tr
              key={index}
              className="border-b border-gray-700 hover:bg-gray-800 transition-all"
            >
              <td className="py-3 px-4 text-white font-semibold">
                {proj.name}
              </td>
              <td className="py-3 px-4 text-gray-300 border border-gray-700">
                {proj.tech}
              </td>
              <td className="py-3 px-4 text-gray-400">{proj.description}</td>
              <td className="py-3 px-4 text-red-400 border border-gray-700">
                {proj.publisher}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-gray-500 text-white hover:bg-red-500 disabled:opacity-40"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === i + 1
                ? "bg-red-500 border-red-500 text-white"
                : "border-gray-500 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-gray-500 text-white hover:bg-red-500 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyProjectsTable;
