import '../styles/App.css';

function Work() {
  return (
    <div className='content-wrap'>
      <div className='title'>
        <h6>Work</h6>
        </div>

        <div className='project'>
          <div className='project-image'>
          </div>
          <div className='project-content'>
          </div>
        </div>

          <div className='footer'>
            <p className="info">Loosely designed in 
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">&nbsp;Figma&nbsp;</a>and coded in 
            <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">&nbsp;Visual Studio Code.&nbsp;</a>Built with
            <a href="https://react.dev/" target="_blank" rel="noreferrer">&nbsp;React.js&nbsp;</a>and deployed with 
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">&nbsp;Netlify.&nbsp;</a></p>
          </div>
    </div>
  );
}

export default Work;
