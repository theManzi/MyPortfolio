import React from 'react'
import FirstCord from '../cards/firstCord.jsx';
import Tittle from './tittle';

const ExpirienceSection = () => {
  return (
    <div className="justify-items-center">
      {" "}
      <Tittle head1="My Experience" />
      <FirstCord
        img={"/technical.png"}
        campany={"JosueforJosue"}
        position={"Technical Content Writer"}
        p1={
          " • Created Multiple Software Development Projects with their detailed Documentation."
        }
        p2={"• Worked with the Dynamic Team of JosueforJosue."}
      />
    </div>
  );
}

export default ExpirienceSection