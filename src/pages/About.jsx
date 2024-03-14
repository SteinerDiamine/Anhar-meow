import React from 'react';
import photo from '../Image/photo.jpeg'; // Importing the image

const About = () => {
  return (
    <section className='max-container'>
      <img src={photo} alt='Description of the image'
      /> {/* Using the imported image */}
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shawdow'>Anhar Ansari</span>
      </h1>
    </section>
  );
};

export default About;
