import React from 'react';
import './index.css';
import './styles/App.css';
import resumePDF from './images/Resume.pdf';
import useHover from './Sections/Components/arrowHoverFunction';
import {PiArrowSquareUpRightBold, PiArrowSquareUpRightFill, PiGithubLogoLight, PiCodepenLogoLight, PiInstagramLogoLight} from "react-icons/pi";

function App() {
  const githubUrl = 'https://github.com/himynameisyannick';
  const instagramUrl = 'https://www.instagram.com/yannicklahti/';
  const codepenUrl = 'https://codepen.io/Burgerwhip';
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yannick Lahti</h1>
        <h3>Junior Front-End developer</h3>
        <p>Creative developer focusing on 3D & Interaction. Based in london (uk)</p>

        <div className='App-social'>
          <span>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><PiGithubLogoLight className='icon'/></a>
            <a href={codepenUrl} target="_blank" rel="noopener noreferrer"><PiCodepenLogoLight className='icon'/></a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><PiInstagramLogoLight className='icon'/></a>
          </span>
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
      </header>
    </div>
  );
}

export default App;
