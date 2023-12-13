import React from 'react';
import '../index.css';
import '../styles/App.css';
import resumePDF from '../images/Resume.pdf';
import useHover from '../Sections/Components/arrowHoverFunction';
import {PiArrowSquareUpRightBold, PiArrowSquareUpRightFill} from "react-icons/pi";


function About() {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div className='content-wrap'>
      <div className='title'>
        <h6>About</h6>
      </div>

      <p className='lg-font'>As a front-end developer, I merge technology with aesthetics, drawing inspiration from art and minimalism. Proficient in HTML, CSS, and JavaScript, I create user-friendly interfaces with meticulous attention to detail.</p>
      <p className='lg-font'>Guided by minimalistic elegance, each design element serves a purpose. Staying current with the latest front-end technologies, I constantly refine my craft.</p> 
      <p className='lg-font'>Beyond coding, I explore design trends and emerging technologies, dedicated to exceeding client and user expectations.</p>
      <p className='lg-font'>My journey fuses technological expertise, artistic inspiration, and a commitment to impactful digital experiences.</p>

      <div className="resume">
      <h6>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View Full Résumé
              {isHovered ? <PiArrowSquareUpRightBold className='arrowLink'/> : <PiArrowSquareUpRightFill className='arrowLink'/>}
            </a>
          </h6>
      </div>
    </div>
  );
}

export default About;
