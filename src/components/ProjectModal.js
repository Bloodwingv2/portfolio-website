import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, project }) => {
  if (!project) {
    return null;
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        {project.screenshots && project.screenshots.length > 0 && (
          <Carousel className="mb-4">
            {project.screenshots.map((screenshot, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded"
                  src={screenshot}
                  alt={`${project.title} Screenshot ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        <p className="project-details-description">{project.details}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-3">
            <h5>Technologies Used:</h5>
            <div className="d-flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge bg-primary m-1">{tech}</span>
              ))}
            </div>
          </div>
        )}
        {project.features && project.features.length > 0 && (
          <div className="mb-3">
            <h5>Key Features:</h5>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        {project.liveDemo && (
          <Button variant="primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Button>
        )}
        {project.githubRepo && (
          <Button variant="outline-secondary" href={project.githubRepo} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
