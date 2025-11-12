import React from 'react'
import Tittle from '../description/tittle'
import PrimaryBtn from '../Button/primaryBtn';



const Footer = () => {
  
  

    const link = [
        {
            name: "Local Address",
            url: "#",
        },
        {
            name: "izeremanzijosue2@gmail.com",
            url: "#",
        },
        {
            name: "+250 790194517",
            url: "#",
        },
    ];

   

  return (
    <div className="bg-[#020312] ml-10 mt-50 italic">
      <Tittle
        head1="Contact Me"
        head2="Let's Work Together"
        p=" I will Help you in your next Project, Contact me through details given
        below ."
      />
      <div className='text-white/50 '>
        {
        link.map((item, index) => (
          <div className='cursor-pointer hover:text-red-500 hover:-translate-y-1 transition duration-300 mb-2 text-xl'>
            {item.name}
          </div>
        ))}
          </div>
      <PrimaryBtn name="Let's Chat" link="/Contact" />
      
      
  
    </div>
  );
}

export default Footer