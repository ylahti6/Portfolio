import './index.css';
import './styles/App.css';
import { PiGithubLogoLight, PiCodepenLogoLight, PiInstagramLogoLight } from "react-icons/pi";

function App() {

  const githubUrl = 'https://github.com/himynameisyannick';
  const instagramUrl = 'https://www.instagram.com/yannicklahti/';
  const codepenUrl = 'https://codepen.io/Burgerwhip';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yannick Lahti</h1>
        <h3>Junior Front-End developer</h3>
        <p className='lg-font'>I build accessible and easy to use<br /> applications for the web.</p>
      
          <div className='App-social'>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><PiGithubLogoLight className='icon'/></a>
            <a href={codepenUrl} target="_blank" rel="noopener noreferrer"><PiCodepenLogoLight className='icon'/></a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><PiInstagramLogoLight className='icon'/></a>
          </div>
      </header>
    </div> 
  );
}

export default App;
