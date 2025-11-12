import React from 'react'

const Tittle1 = ({head1, head2}) => {
  return (
    <div className="justify-items-center italic space-y-3 mb-20 mt-45 bg-[#020312]">
      <h1 className="text-white text-6xl">{head1}</h1>
      <h2 className="text-red-500 text-2xl">{head2}</h2>
    </div>
  );
}

export default Tittle1