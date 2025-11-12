import React from 'react'
import Tittle1 from './tittle1'
import { map } from 'framer-motion/client';
import ThirdCord from '../cards/thirdcord';

const Responsibilities = () => {

    const Responsibilities = [
      {
        img: "/campus.png",
        p1: "GFG College Chapter",
        p2: "President",
      },
      {
        img: "/chess.png",
        p1: "Chess Coordinator",
        p2: "College Chess Club",
      },
    ];


    return (
        <div className='justify-items-center'>
            <Tittle1
                head1="Position of Responsibilities"
                head2="Some of My valunteer Work"
            />
            <div className='flex space-x-8'>
                {
                    Responsibilities.map((item, index) => (
                        <div>
                            <ThirdCord
                                img={item.img}
                                p1={item.p1}
                                p2={item.p2} />
                        </div>
                    ))
                }
            </div>
                
          
        </div>
    );
}
export default Responsibilities