import '../index.css';
import '../styles/App.css';

function About() {
  const resumeUrl = 'https://github.com/himynameisyannick/PPv2/blob/f6dac43bed821f713453c9ad7dc141de931f4818/my-app/public/Resume.pdf';

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
        <h6><a href={resumeUrl} target="_blank" rel="noopener noreferrer">View Full Resume</a></h6>
      </div>
    </div>
  );
}

export default About;
