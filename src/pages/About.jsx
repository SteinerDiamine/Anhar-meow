import React from 'react';
import photo from '../Image/zen.avif'; // Importing the image
import { skills } from '../Constants';

const About = () => {
  return (
    <section className='max-container'>
      <img src={photo} alt='Description of the image'
      /> {/* Using the imported image */}
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shawdow'>Shubham Sharma</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <div class="poem">
    <p>Beyond the cloud, </p>
    <p>Standing on earth yet Soaring the Highest, </p>
    <p>Transcending the stars with dreams and optimism...</p>
    <p>The childish wisdom with the quality of Sage,</p>
    <p>Listening to songs that have yet been unknown to heart....</p>
</div>


        
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'> My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) =>(
            <div className='block-container w-20 h-20'>
              <div className='btn-font rounded-xl flex justify-center items-center'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"/>
                
                
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default About;
