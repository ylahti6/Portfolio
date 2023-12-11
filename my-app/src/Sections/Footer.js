import '../index.css';
import '../styles/App.css';

function Footer() {
  return (
    <div className='content-wrap'>
        <p className="info content">Crafted in 
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">&nbsp;Figma&nbsp;</a>and coded in 
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">&nbsp;Visual Studio Code</a>.&nbsp;Built with
        <a href="https://react.dev/" target="_blank" rel="noreferrer">&nbsp;React.js&nbsp;</a>and 
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">&nbsp;SASS</a>.&nbsp;Deployed with 
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">&nbsp;Netlify</a>.&nbsp;All text is set in the 
        <a href='https://fonts.google.com/specimen/Poppins' target="_blank" rel="noreferrer">&nbsp;Poppins&nbsp;</a> 
        typeface and font sizing and color palette can be found within my 
        <a href='https://github.com/himynameisyannick' target="_blank" rel="noreferrer">&nbsp;GitHub</a>.
        </p>
    </div>
  );
}

export default Footer;
