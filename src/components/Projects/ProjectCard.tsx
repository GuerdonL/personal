// ProjectCard.tsx
import React, { useState, useRef, useEffect } from 'react';
import './ProjectCard.css';
// import Modal from 'react-modal';
// import { CSSTransition } from 'react-transition-group';

// Modal.setAppElement('#root'); // Replace '#root' with the actual app element ID in your project

interface ProjectCardProps {
  id: string;
  title: string;
  imageUrl: string;
  shortDescription: string;
  fullDescription: string;
  publicationDate: string;
  projectWriteup: string;
  links: {
    github: string;
    liveDemo: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  imageUrl,
  shortDescription,
  fullDescription,
  publicationDate,
  projectWriteup,
  links,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect=cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div 
    ref={cardRef}
    className="card-container" 
    onMouseMove={handleMouseMove}
    >
      <div className="card-border"></div>
      <div className="card-content">
        {/* <img className="image-header" src={imageUrl} alt={title} /> */}
        <div className="short-description">{shortDescription}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
