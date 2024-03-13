import React from "react";
import "../styles/global.css";
import Card from "./Components/Card.js";
import AAC from "../images/work-aacapp.png";
import LiberNotes from "../images/work-libernotes.png";
import CodeMentor from "../images/work-codementor.jpg";

function Work() {
  const projects = [
    {
      name: "Fun & Practice",
      industry: "industry",
      date: "101010",
    },
    {
      testone: "hello one",
      testtwo: "hello two",
      testthree: "hello three",
    },
  ];

  return (
    <div className="container-work">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <span>
            <p>{project.name}</p>
            <p>{project.industry}</p>
            <p>{project.date}</p>
          </span>
          <div className="list">
            <a href="#">{project.testone}, {project.testtwo}, {project.testthree}</a>
          </div>
        </div>
      ))}
    </div>
  );  
}

export default Work;
