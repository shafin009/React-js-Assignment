import React from 'react'
import { Link } from 'react-router-dom'
import Cost from '../Cost/Cost';
import Payment from '../Payment/Payment';
import Shipping from '../Shipping/Shipping';


const Homepage = () => {





  return (

    <div className=' grid lg:grid-cols-3 gap-3 justify-center items-center lg:mr-2'>


      <div>
        <Shipping />
      </div>



      <div>
        <Payment />
      </div>



      <div>
        <Cost />
      </div>



    </div>

  );
}

export default Homepage;
