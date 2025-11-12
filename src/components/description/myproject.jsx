import React from 'react'
import Tittle1 from './tittle1'
import SecondCord from '../cards/secondcord';

const MyProject = () => {

  const Projects = [
    {
      img: "/library.png",
      p1: "Web App development",
      p2: "Library Management System",
    },
    {
      img: "/weather.png",
      p1: "Web App Development",
      p2: "Weather Forecasting App",
    },
    {
      img: "/dog.png",
      p1: "Machine Learning",
      p2: "Dog's Breed Classification",
    },
    {
      img: "/boston.png",
      p1: "Machine Learning",
      p2: "Boston House Price Prediction",
    },
  ];

  return (
    <div className="justify-items-center">
      <Tittle1 head1="My Projects" head2="Some Of My Distinguished Works" />
      <div className="grid grid-cols-3 space-x-8 space-y-8">
        {Projects.map((item, index) => (
          <div>
            <SecondCord 
               img={item.img}
               p1={item.p1}
              p2={item.p2}
              link='/myprojects'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject