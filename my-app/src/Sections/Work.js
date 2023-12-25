import React from "react";
import "../index.css";
import "../styles/App.css";
import Card from "./Components/Card.js";
import AAC from "../images/work-aacapp.png";
import LiberNotes from "../images/work-libernotes.png";
import CodeMentor from "../images/work-codementor.jpg";

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
      keywords: ["React", "MongoDB"],
    },
    {
      title: "Practice",
      content:
        "I use Codementor to improve my web development skills and stay updated on industry trends. It's my go-to platform for learning and seeking guidance from experienced mentors, showcasing my commitment to continuous improvement in this dynamic field.",
      imageSrc: [CodeMentor],
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
