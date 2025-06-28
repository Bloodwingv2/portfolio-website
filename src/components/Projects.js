import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Chatbot',
    description: 'A smart chatbot capable of natural language understanding and generation.',
    image: 'https://source.unsplash.com/random/800x600/?chatbot,ai',
    liveDemo: '#',
    githubRepo: '#',
    details: 'This project involved building an AI-powered chatbot using a combination of natural language processing (NLP) techniques and machine learning models. The chatbot can understand user queries, provide relevant information, and engage in conversational dialogue. It was trained on a custom dataset to improve its domain-specific knowledge.',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
    features: [
      'Natural Language Understanding (NLU)',
      'Contextual Conversation Management',
      'Integration with external APIs',
      'Scalable architecture',
    ],
    screenshots: [
      'https://source.unsplash.com/random/800x600/?chatbot-ui,ai-interface',
      'https://source.unsplash.com/random/800x600/?chatbot-flow,ai-diagram',
    ],
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication and product management.',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce,shopping',
    liveDemo: '#',
    githubRepo: '#',
    details: 'Developed a robust e-commerce platform from scratch, featuring secure user authentication, product listing, shopping cart functionality, and order processing. The backend was built with Node.js and Express, while the frontend utilized React for a dynamic user experience. MongoDB was used for database management.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe API'],
    features: [
      'User Authentication (JWT)',
      'Product Catalog & Search',
      'Shopping Cart & Checkout',
      'Order History & Management',
      'Payment Gateway Integration',
    ],
    screenshots: [
      'https://source.unsplash.com/random/800x600/?ecommerce-homepage,online-store',
      'https://source.unsplash.com/random/800x600/?product-page,checkout-process',
    ],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills.',
    image: 'https://source.unsplash.com/random/800x600/?portfolio,website',
    liveDemo: '#',
    githubRepo: '#',
    details: 'Designed and developed a responsive personal portfolio website to effectively showcase my projects, skills, and experience. The site features interactive elements, smooth animations, and a clean, modern design to provide an engaging user experience. Built with React and Bootstrap.',
    technologies: ['React', 'Bootstrap', 'Framer Motion', 'CSS3'],
    features: [
      'Responsive Design',
      'Interactive UI Elements',
      'Project Showcase with Modals',
      'Contact Form Integration',
    ],
    screenshots: [
      'https://source.unsplash.com/random/800x600/?portfolio-home,web-design',
      'https://source.unsplash.com/random/800x600/?portfolio-projects,website-layout',
    ],
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A simple and intuitive task management application.',
    image: 'https://source.unsplash.com/random/800x600/?task-manager,productivity',
    liveDemo: '#',
    githubRepo: '#',
    details: 'A user-friendly task management application designed to help users organize their daily tasks efficiently. Features include task creation, categorization, due dates, and completion tracking. The application provides a clean interface for easy task management.',
    technologies: ['React', 'Firebase', 'Context API', 'CSS Modules'],
    features: [
      'Task Creation & Editing',
      'Task Categorization',
      'Due Date Reminders',
      'Real-time Data Synchronization',
    ],
    screenshots: [
      'https://source.unsplash.com/random/800x600/?task-list,app-screenshot',
      'https://source.unsplash.com/random/800x600/?todo-app,dashboard',
    ],
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A web application to display real-time weather information.',
    image: 'https://source.unsplash.com/random/800x600/?weather,forecast',
    liveDemo: '#',
    githubRepo: '#',
    details: 'Developed a dynamic weather dashboard that fetches and displays real-time weather data for any city worldwide. The application utilizes a third-party weather API to provide current conditions, temperature, humidity, and wind speed. Users can search for cities and view detailed forecasts.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeatherMap API', 'RESTful APIs'],
    features: [
      'Current Weather Conditions',
      '5-Day Forecast',
      'City Search Functionality',
      'Responsive Layout',
    ],
    screenshots: [
      'https://source.unsplash.com/random/800x600/?weather-app,dashboard-ui',
      'https://source.unsplash.com/random/800x600/?weather-forecast,city-weather',
    ],
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

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
                className="h-100 project-card-item"
                onClick={() => handleShowModal(project)} // Open modal on card click
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="mt-auto">
                      {/* Buttons are now inside the modal, but keeping these for quick access if needed */}
                      {/* <Button variant="primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="me-2">Live Demo</Button>
                      <Button variant="outline-secondary" href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub</Button> */}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <ProjectModal
        show={showModal}
        handleClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
