import React from "react";
import "../index.css";
import "../styles/App.css";
import Card from "./Components/Card.js";
import AAC from "../images/AACapp.png";
import LiberNotes from "../images/LiberNotes.png";

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
        "Developed a user-friendly note-taking app using React Native and MongoDB, ensuring a smooth experience for capturing and organizing thoughts, ideas, and important information. ",
      imageSrc: [LiberNotes],
      keywords: ["React", "SASS", "MongoDB"],
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
