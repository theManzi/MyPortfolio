import React from 'react'

const Tittle1 = ({head1, head2}) => {
  return (
    <div className="justify-items-center italic space-y-3 mb-20 mt-45 bg-[#020312]">
      <h1 className="text-white sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl">{head1}</h1>
      <h2 className="text-red-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">{head2}</h2>
    </div>
  );
}

export default Tittle1