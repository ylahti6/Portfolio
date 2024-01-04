import React from "react";
import "../index.css";
import "../styles/App.css";

import resumePDF from "../images/Resume.pdf";
import { FaAngleRight } from "react-icons/fa";
const About = () => {
  return (
    <div className="content-wrap about">
      <div className="title">
        <h3>About</h3>
      </div>

      <p>
        i specialize in front-end development, proficient in html, css, and
        javascript, i create user-friendly interfaces with meticulous attention
        to detail. guided by minimalistic elegance, every design element serves
        a purpose.
      </p>

      <a
        className="button"
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer">
        View Full Résumé
        <FaAngleRight className="button-icon" />
      </a>
    </div>
  );
};

export default About;
