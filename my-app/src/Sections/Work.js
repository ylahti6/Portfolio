import React from "react";
import "../index.css";
import "../styles/App.css";
import Card from "./Components/Card.js";
import AAC from "../images/AAC-Reimagined.png";

function Work() {
  const projects = [
    {
      title: "AAC App",
      content:
        "Developed a user-friendly Augmentative and Alternative Communication (AAC) app using React Native, empowering individuals with communication challenges to express themselves effortlessly. ",
      imageSrc: [AAC],
      keywords: ["React Native"],
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
        <h6>Work</h6>
      </div>

      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

export default Work;
