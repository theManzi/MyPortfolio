import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ name, link = "#" }) => {
  return (
    <div className="mt-3">
      <Link to={link}>
        <button className="bg-red-500 px-10 py-3 rounded-lg text-white font-semibold hover:bg-transparent hover:border hover:border-red-500 hover:transform hover:-translate-y-1 duration-100 ease-in cursor-pointer">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default PrimaryBtn;
