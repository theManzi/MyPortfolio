import { i } from 'framer-motion/client';
import React from 'react'

const FirstCord = ({img, campany, position, p1, p2}) => {
   

  return (
    <div className="group bg-[#020312] italic">
      <div class="group-hover:border-t-3 group-hover:border-red-500 h-90 w-295 rounded-xl hover:-translate-y-1 transition duration-300 bg-white/10 cursor-pointer">
        <span class="block p-10">
          <img
            src={img}
            alt="Josue Izere"
            className="w-60 h-40 rounded-2xl mb-5"
          />
          <h2 class="text-white text-2xl mb-2 group-hover:text-red-500 group-hover:duration-300">{campany}</h2>
          <h3 class="text-red-500 text-lg">{position}</h3>
          <p className="text-white/50">{p1}</p>
          <p className="text-white/50">{p2}</p>
        </span>
      </div>
    </div>
  );
}

export default FirstCord