import React from "react";
import "./index.css";
import "./styles/App.css";
import resumePDF from "./images/Resume.pdf";
import {
  PiGithubLogoLight,
  PiCodepenLogoLight,
  PiInstagramLogoLight,
} from "react-icons/pi";
import { gsap } from "gsap";

function App() {
  const githubUrl = "https://github.com/himynameisyannick";
  const instagramUrl = "https://www.instagram.com/yannicklahti/";
  const codepenUrl = "https://codepen.io/Burgerwhip";

  // gsap
  const tl = gsap.timeline({ default: { duration: 0.75, ease: "power1.out" } });
  tl.fromTo("h1", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.4 });
  tl.fromTo("h3", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.4 });
  tl.fromTo(
    ".App-header p",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.4 }
  );
  tl.fromTo(
    ".content-wrap.about",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.5 },
    "<"
  );
  tl.fromTo(
    ".content-wrap.work",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.5 }
  );
  tl.fromTo(
    ".content-wrap.writing",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.5 }
  );
  tl.fromTo(
    ".App-social .one",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.7 },
    "<"
  );
  tl.fromTo(
    ".App-social .two",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.7 }
  );
  tl.fromTo(
    ".App-social .three",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.7 }
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yannick Lahti</h1>
        <h3>Front-End developer</h3>
        <p>Creative developer, Based in london (uk).</p>

        <div className="App-social">
          <span>
            <a
              href={githubUrl}
              className="one"
              target="_blank"
              rel="noopener noreferrer">
              <PiGithubLogoLight className="icon one" />
            </a>
            <a
              href={codepenUrl}
              className="two"
              target="_blank"
              rel="noopener noreferrer">
              <PiCodepenLogoLight className="icon two" />
            </a>
          </span>
          <p className="three">
            <a
              className="hover"
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer">
              View Full Résumé
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
