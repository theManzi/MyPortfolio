import React from 'react'
import { Link } from 'react-router-dom'

const SecondCord = ({img, p1, p2, link = "#"}) => {
  return (
    <div class="p-4 bg-white/10 hover:-translate-y-2 transition duration-300 rounded-lg shadow italic">
      <Link to={link}>
        <img src={img} alt="Achievement" class="w-80 h-50 mb-4 rounded-xl" />
        <p class="text-red-400 mb-2">{p1}</p>
        <p class="text-white text-2xl">{p2}</p>
      </Link>
    </div>
  );
}

export default SecondCord