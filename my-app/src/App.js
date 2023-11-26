import './styles/App.css';
import { PiGithubLogoLight, PiCodepenLogoLight, PiInstagramLogoLight } from "react-icons/pi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yannick Lahti</h1>
        <h3>Junior Front-End developer</h3>
        <p>I build accessible and easy to use<br /> applications for the web.</p>
      
    
          <div className='App-social'>
            <PiGithubLogoLight className='icon'/>
            <PiCodepenLogoLight className='icon'/>
            <PiInstagramLogoLight className='icon'/>
          </div>
      </header>

      
    </div> 
  );
}

export default App;
