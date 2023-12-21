import "../index.css";
import "../styles/App.css";

function Footer() {
  return (
    <div className="content-wrap">
      <p className="info content">
        Crafted in&nbsp;
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          Figma
        </a>
        &nbsp;and coded in&nbsp;
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer">
          Visual Studio Code
        </a>
        .&nbsp;Built with&nbsp;
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React.js
        </a>
        &nbsp;and&nbsp;
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
          SASS
        </a>
        .&nbsp;Deployed with&nbsp;
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
        .&nbsp;All text is set in the&nbsp;
        <a
          href="https://fonts.google.com/specimen/Poppins"
          target="_blank"
          rel="noreferrer">
          Poppins
        </a>
        &nbsp;typeface and font sizing and color palette can be found within
        my&nbsp;
        <a
          href="https://github.com/himynameisyannick"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
