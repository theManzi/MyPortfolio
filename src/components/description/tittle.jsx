import React from 'react'

const Tittle = ({head1, head2, p}) => {
  return (
    <div className="mb-10 space-y-3">
      <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl italic text-white">{head1}</h1>
      <h2 className="text-sm md:text-xl sm:text-base lg:text-2xl xl:text-4xl italic text-red-500">{head2}</h2>
      <p className="text-white/50 text-sm/relaxed/30">{p}</p>
    </div>
  );
}

export default Tittle