// import { i } from 'framer-motion/client';
// import React from 'react'

// const FirstCord = ({img, campany, position, p1, p2}) => {
   

//   return (
//     <div className="group bg-[#020312] italic">
//       <div class="group-hover:border-t-3 group-hover:border-red-500 rounded-xl hover:-translate-y-1 transition duration-300 bg-white/10 cursor-pointer">
//         <span class="block p-10 sm:h-20  ">
//           <img
//             src={img}
//             alt="Josue Izere"
//             className="md:w-60 md:h-40 sm:w-30 sm:h-20 rounded-2xl mb-5"
//           />
//           <h2 class="text-white text-2xl mb-2 group-hover:text-red-500 group-hover:duration-300">{campany}</h2>
//           <h3 class="text-red-500 text-lg">{position}</h3>
//           <p className="text-white/50">{p1}</p>
//           <p className="text-white/50">{p2}</p>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default FirstCord

import React from "react";

const FirstCord = ({ img, campany, position, p1, p2 }) => {
  return (
    <div className="group bg-[#020312] italic flex justify-center">
      <div className="group-hover:border-t-4 group-hover:border-red-500 rounded-xl hover:-translate-y-1 transition duration-300 bg-white/10 cursor-pointer w-full sm:w-140 md:w-200 lg:w-280 gap-2">
        <span className="block p-6 sm:p-4 md:p-6">
          <img
            src={img}
            alt="Josue Izere"
            className="w-40 h-40 sm:h-28 md:h-36 lg:h-44 object-cover rounded-2xl mb-5"
          />
          <h2 className="text-white text-xl sm:text-lg md:text-2xl mb-2 group-hover:text-red-500 duration-300">
            {campany}
          </h2>
          <h3 className="text-red-500 text-base sm:text-sm md:text-lg mb-1">
            {position}
          </h3>
          <p className="text-white/50 text-sm sm:text-xs md:text-base">{p1}</p>
          <p className="text-white/50 text-sm sm:text-xs md:text-base">{p2}</p>
        </span>
      </div>
    </div>
  );
};

export default FirstCord;
