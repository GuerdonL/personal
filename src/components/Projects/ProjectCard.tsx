// ProjectCard.tsx
import React, { useState } from 'react';
import './ProjectCard.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Replace '#root' with the actual app element ID in your project

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card-container" onClick={openModal}>
      <img className="image-header" src={imageUrl} alt={title} />
      <div className="short-description">{shortDescription}</div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="lightbox">
        <h2>{title}</h2>
        <p><strong>Publication Date:</strong> {publicationDate}</p>
        <p><strong>Full Description:</strong> {fullDescription}</p>
        <p><strong>Project Writeup:</strong> {projectWriteup}</p>
        <p>
          <strong>Links:</strong>
          {' '}
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {' | '}
          <a href={links.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ProjectCard;
