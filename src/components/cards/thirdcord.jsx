import React from 'react'

const ThirdCord = ({img, p1, p2}) => {
  return (
    <div class="p-4 bg-white/10 hover:-translate-y-2 transition duration-300 rounded-lg shadow italic">
      <div>
        <img src={img} alt="Achievement" class="w-135 h-80 mb-4" />
        <p class="text-red-400 mb-2">{p1}</p>
        <p class="text-white text-2xl">{p2}</p>
      </div>
    </div>
  );
}

export default ThirdCord