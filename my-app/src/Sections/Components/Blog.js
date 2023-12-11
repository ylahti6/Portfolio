import React from 'react';

const Blog = ({ title, content,  imageSrc }) => {
  return (
    <div className="project-card">
        <div className="project-header">
        {imageSrc && <img src={imageSrc} className='project-image' alt={`${title} header`} />}
        </div>
        <div className="project-content">
        <span>
          <h6>{title}</h6>
        </span>
        <p>{content}</p>        
      </div>
    </div>
  );
};

export default Blog;
