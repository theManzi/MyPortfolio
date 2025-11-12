import React from 'react'
import Tittle from './tittle'
import FirstCord from '../cards/firstCord'

const MySkills = () => {

  const skills = [
    {
      img: "/programming.png",
      campany: "Competitive Programming",
      p1:
        "Competitive programming is a sport of coding, where individuals engage in solving algorithmic challenges against the clock, showcasing their",
      p2:
        "problem-solving skills and efficiency in crafting elegant and optimized solutions.",
    },
    {
      img: "/frontend.png",
      campany: "Front-end Development",
      p1:
        "Front-end development is the art of bringing digital creativity to life, focusing on the user interface and user experience to seamlessly merge design",
      p2:
        "with functionality, shaping the visual and interactive elements of websites.",
    },
    {
      img: "/machine.png",
      campany: "Machine Learning",
      p1:
        "Machine learning is a transformative field at the intersection of computer science and A.I., empowering systems to learn from data, recognize",
      p2:
        "patterns, and make intelligent decisions, entering in a automated insights and problem-solving.",
    },
  ];

  return (
    <div className="justify-items-center mt-45">
      <Tittle head1="My Skills" />
     

      <div>
        {skills.map((item, index) => (
          <FirstCord
            key={index}
            img={item.img}
            campany={item.campany}
            p1={item.p1}
            p2={item.p2}
          />
        ))}
      </div>
    </div>
  );
}

export default MySkills