import '../index.css';
import '../styles/App.css';

function About() {
  return (
    <div className='content-wrap'>
      <div className='title'>
        <h6>ABOUT</h6>
      </div>

      <p>As a front-end developer, I merge technology with aesthetics, drawing inspiration from art and minimalism. Proficient in HTML, CSS, and JavaScript, I create user-friendly interfaces with meticulous attention to detail.</p>
      <p>Guided by minimalistic elegance, each design element serves a purpose. Staying current with the latest front-end technologies, I constantly refine my craft.</p> 
      <p>Beyond coding, I explore design trends and emerging technologies, dedicated to exceeding client and user expectations.</p>
      <p>My journey fuses technological expertise, artistic inspiration, and a commitment to impactful digital experiences.</p>

      <div className="resume">
        {/* <h6><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">View Full Resume</a></h6> */}
        <iframe src="/path/to/Resume.pdf" title="Resume" width="100%" height="600px"></iframe>

      </div>
    </div>
  );
}

export default About;
