import React from 'react';
import '../index.css';
import '../styles/App.css';
import Card from './Components/Card.js';

function Work() {
  const projects = [
    {
      title: "Libernotes",
      content: "A user-friendly note-taking app built with React.js, styled with Scss.",
      imageSrc: "{my-app/public/logo512.png}",
      keywords: ["React.js", "Scss"],
    },
    {
      title: "IT GIRL Theme (Blog)",
      content: "Another project description here.",
      imageSrc: "my-app/src/images/course-card.webp",
      keywords: ["React.js","SCSS", "Blog",],
    },
    {
      title: "FullBoost",
      content: "Yet another project description.",
      imageSrc: "my-app/src/images/course-card.webp",
      keywords: ["React.js", "Sass"],
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
