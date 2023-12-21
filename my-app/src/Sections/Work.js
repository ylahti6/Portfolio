import React from "react";
import "../index.css";
import "../styles/App.css";
import Card from "./Components/Card.js";
import Fonts from "../images/course-card.png";

function Work() {
  const projects = [
    {
      title: "AAC App",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: [Fonts],
      keywords: ["React.js", "Scss"],
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
