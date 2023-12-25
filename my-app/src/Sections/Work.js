import React from "react";
import "../index.css";
import "../styles/App.css";
import Card from "./Components/Card.js";
import AAC from "../images/AAC-Reimagined.png";
import LiberNotes from "../images/AAC-Reimagined.png";

function Work() {
  const projects = [
    // AAC APP
    {
      title: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          AAC App
        </a>
      ),
      content:
        "Developed a user-friendly Augmentative and Alternative Communication (AAC) app using React Native, empowering individuals with communication challenges to express themselves effortlessly. ",
      imageSrc: [AAC],
      keywords: ["React Native"],
    },
    // Note taking app
    {
      title: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          Liber notes
        </a>
      ),
      content:
        "Developed a user-friendly Augmentative and Alternative Communication (AAC) app using React Native, empowering individuals with communication challenges to express themselves effortlessly. ",
      imageSrc: [AAC],
      keywords: ["HTML", "SCSS", "Javascript"],
    },
    {
      title: "Practice",
      content:
        "Developed a user-friendly Augmentative and Alternative Communication (AAC) app using React Native, empowering individuals with communication challenges to express themselves effortlessly. ",
      imageSrc: [AAC],
      // keywords: ["React.js", "Scss"],
    },
  ];

  return (
    <div className="content-wrap work">
      <div className="title">
        <h3>Work</h3>
      </div>

      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

export default Work;
