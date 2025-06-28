import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One, highlighting its key features and technologies used.',
    image: 'https://source.unsplash.com/random/800x600/?code,programming', // Random tech image
    liveDemo: '#',
    githubRepo: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two, highlighting its key features and technologies used.',
    image: 'https://source.unsplash.com/random/800x600/?software,development', // Random tech image
    liveDemo: '#',
    githubRepo: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three, highlighting its key features and technologies used.',
    image: 'https://source.unsplash.com/random/800x600/?data,technology', // Random tech image
    liveDemo: '#',
    githubRepo: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of Project Four, highlighting its key features and technologies used.',
    image: 'https://source.unsplash.com/random/800x600/?web,design', // Random tech image
    liveDemo: '#',
    githubRepo: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A brief description of Project Five, highlighting its key features and technologies used.',
    image: 'https://source.unsplash.com/random/800x600/?computer,science', // Random tech image
    liveDemo: '#',
    githubRepo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 display-4 fw-bold"
        >
          My Projects
        </motion.h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project.id * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                className="h-100"
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="mt-auto">
                      <Button variant="primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="me-2">Live Demo</Button>
                      <Button variant="outline-secondary" href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub</Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;