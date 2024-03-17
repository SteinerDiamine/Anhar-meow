import React from 'react';
import photo from '../Image/photo.jpeg'; // Importing the image
import { skills } from '../Constants';

const About = () => {
  return (
    <section className='max-container'>
      <img src={photo} alt='Description of the image'
      /> {/* Using the imported image */}
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shawdow'>Anhar Ansari</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        

Hello! I'm Anhar Ansari, a passionate second-year B.Tech student currently pursuing my degree at LNCT Groups in Bhopal. With a keen interest in technology and its transformative potential, I'm dedicated to honing my skills and knowledge in this dynamic field.</p>

<p>Living in the vibrant city of Bhopal, I find inspiration in its blend of traditional charm and modern advancements. Being immersed in this diverse environment fuels my curiosity and drives me to explore new opportunities for growth and learning.</p>

<p>
In addition to my academic pursuits, I actively engage in extracurricular activities that enrich my college experience. Whether it's participating in technical competitions, collaborating on projects, or contributing to community initiatives, I'm always eager to broaden my horizons and make meaningful contributions.</p>

<p>
As a proactive learner, I believe in the power of continuous improvement and adaptability. I embrace challenges as opportunities for growth and approach them with determination and resilience. With a strong foundation in both theoretical knowledge and practical skills, I'm committed to achieving academic excellence while preparing myself for the challenges of tomorrow's technology-driven world.</p>


<p>
Outside of academics, I enjoy Reading , Painting and Listening to Songs . These activities not only provide me with relaxation and recreation but also help me maintain a balanced lifestyle.</p>

<p>
In the future, I aspire to [mention your career goals or aspirations], where I can leverage my skills and knowledge to make a positive impact on society while pursuing my passion for innovation and technology.</p>

<p>
I look forward to connecting with like-minded individuals, collaborating on exciting projects, and continuing my journey of growth and discovery in the vibrant city of Bhopal.</p>
        
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
