import '../styles/App.css';
import Card from './Components/Card.js';

function Work() {
  return (
    <div className='content-wrap'>
      <div className='title'>
        <h6>Work</h6>
        </div>

        <Card 
          title="Libernotes" 
          content="A user-friendly note-taking app built with React.js, styled with Scss." 
          imageSrc="my-app/src/images/course-card.webp"
          />

        <Card 
          title="FullBoost" 
          content="A user-friendly note-taking app built with React.js, styled with Scss." 
          imageSrc="my-app/src/images/course-card.webp"
          />     
    </div>
  );
}

export default Work;
