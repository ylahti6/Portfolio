import React from 'react';
import '../index.css';
import '../styles/App.css';
import Card from './Components/Card.js';
import Fonts from '../images/course-card.png';

function Work() {
  const projects = [
    {
      title: "Libernotes",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: [Fonts],
      keywords: ["React.js", "Scss"],
    },
    {
      title: "IT GIRL Theme (Blog)",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: [Fonts],
      keywords: ["React.js","SCSS", "Blog",],
    },
    {
      title: "Testing C# Game",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: [Fonts],
      keywords: ["React.js", "Sass"],
    },
    {
      title: "FullBoost",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      keywords: ["React.js", "Sass"],
      imageSrc: [Fonts],
    }
  ]

  return (
    <div className='content-wrap'>
      <div className='title'>
        <h6>Work</h6>
        </div>
        
        {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

export default Work;
