import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";

const Card = ({ title, content, keywords, imageSrc }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        {imageSrc && (
          <img
            src={imageSrc}
            className="project-image"
            alt={`${title} header`}
          />
        )}
      </div>

      <div className="project-content">
        <span>
          <h6>{title}</h6>
          <PiGithubLogoLight className="icon" />
        </span>
        <p>{content}</p>

        {/* Keywords function */}
        <p className="project-keywords">
          {keywords &&
            keywords.map((keyword, index) => (
              <span key={index} className="keyword">
                {keyword}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
