import React from 'react';
import '../index.css';
import '../styles/App.css';

const About = () => {
  return (
    <div className='content-wrap'>
      <div className='title'>
        <h6>About</h6>
      </div>

      <p className='lg-font'>I'm a front-end developer who seamlessly blends technology and aesthetics. Proficient in HTML, CSS, and JavaScript, I craft user-friendly interfaces with meticulous attention to detail. Guided by minimalistic elegance, each design element serves a purpose.</p>
      <div className="resume">
        {/* Your additional content here */}
      </div>
    </div>
  );
}

export default About;
