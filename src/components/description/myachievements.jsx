import React from "react";
import SecondCord from "../cards/secondcord";
import Tittle1 from "./tittle1";

const MyAchievements = () => {
  const data = [
    {
      img: "https://paras759.github.io/GFG-Portfolio/img/coding.jpg",
      p1: "Write your Coding achievements here",
      p2: "Details about the Achievement",
    },
    {
      img: "https://paras759.github.io/GFG-Portfolio/img/hackathon.jpg",
      p1: "Write your Hackathons achievements here",
      p2: "Details about the Hackathon",
    },
    {
      img: "https://paras759.github.io/GFG-Portfolio/img/extras.jpg",
      p1: "Write your Extra curricular achievements here",
      p2: "Details about the Achievement",
    },
  ];

  return (
    <div className="justify-items-center " >
      <Tittle1
        head1="My Achievements"
        head2="Some of My Major Achievements"
      />
      <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div>
            <SecondCord img={item.img} p1={item.p1} p2={item.p2} link="/achievements" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAchievements;
