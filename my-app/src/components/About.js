import '../styles/App.css';

function About() {
  return (
    <div className='about'>
        <h6>About</h6>

        <p>As a front-end developer, I merge technology with aesthetics, drawing inspiration from art and minimalism. Proficient in HTML, CSS, and JavaScript, I create user-friendly interfaces with meticulous attention to detail.

Guided by minimalistic elegance, each design element serves a purpose. Staying current with the latest front-end technologies, I constantly refine my craft. Beyond coding, I explore design trends and emerging technologies, dedicated to exceeding client and user expectations. My journey fuses technological expertise, artistic inspiration, and a commitment to impactful digital experiences.</p>

        <div className='footer'>
            <p className="info">Loosely designed in 
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">&nbsp;Figma&nbsp;</a>and coded in 
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">&nbsp;Visual Studio Code.&nbsp;</a>Built with
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">&nbsp;Gatsby.js&nbsp;</a>and deployed with 
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">&nbsp;Netlify.&nbsp;</a></p>
          </div>
    </div>
  );
}

export default About;
