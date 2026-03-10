import React from 'react'
import Tittle1 from './tittle1'
import SecondCord from '../cards/secondcord';
import PrimaryBtn from '../Button/primaryBtn';

const MyProject = () => {

  const Projects = [
    {
      img: "/portfolio.png",
      p1: "Web App development",
      p2: "Personal website.",
      link: "https://manzi-izere-josue.vercel.app/",
    },
    {
      img: "/codeflow.png",
      p1: "Web App Development",
      p2: "code faster with codeflow.",
      link: "https://josue-modern-ui-ux-rouge-phi.vercel.app/",
    },
    {
      img: "/colorlib.png",
      p1: "Web App Development",
      p2: "Colorlib Template.",
      link: "https://manzijsecondproject.netlify.app/",
    },
    {
      img: "/plantInventory.png",
      p1: "Full Stack Development",
      p2: "plantventory",
      link: "https://crud-auth-josue.netlify.app/",
    },
  ];

  return (
    <div className="justify-items-center">
      <Tittle1 head1="My Projects" head2="Some Of My Distinguished Works" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {Projects.map((item, index) => (
          <div>
            <SecondCord 
               img={item.img}
               p1={item.p1}
              p2={item.p2}
              link={item.link}
            />
          </div>
        ))}
      </div>
      <PrimaryBtn name="View Mare" link='/myprojects'/>
    </div>
  );
}

export default MyProject