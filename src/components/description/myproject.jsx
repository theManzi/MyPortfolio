import React from 'react'
import Tittle1 from './tittle1'
import SecondCord from '../cards/secondcord';
import PrimaryBtn from '../Button/primaryBtn';

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
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
      <PrimaryBtn name="View Mare" link='/myprojects'/>
    </div>
  );
}

export default MyProject