/*import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text , link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:xl text-center'>{text}</p>
        <Link to= {Link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src = {arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Anhar</span>  ฅ^•ﻌ•^ฅ
            <br/>
            Currently Learning and Trying new stuff 
        </h1>
    ),

    2: (
        <InfoBox
        text ="Currently pursuing Bachelor's Degree"
        link= "/about"
        btnText="Learn more"/>
    ),

    3: (
        <InfoBox
        text ="I like Painting 🎨"
        link= "/projects"
        btnText="Visit my portfolio"/> 
    ),

    4: (
        <InfoBox
        text ="Reach me for more info"
        link= "/contact"
        btnText="Let's talk"/>
    ),

}



const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
    
  
}

export default Homeinfo */



import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Anhar</span>
        ฅ^•ﻌ•^ฅ
        
        <br />
        <br/>
        Looking forward to learn new things📚

      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Currently pursuing Bachelor's Degree<br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          I like painting 🎨
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        I am open and ready for new oppurtunities
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;