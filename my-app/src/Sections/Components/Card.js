import React from 'react';

const Card = ({ title, content, imageSrc }) => {
  return (
    <div className="project-card">
        <div className="project-header">
        {imageSrc && <img src={imageSrc} alt={`${title} header`} />}
        </div>
        <div className="project-content">
        <h6>{title}</h6>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
