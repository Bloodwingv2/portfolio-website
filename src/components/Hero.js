import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect'; // Import the new component

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100">
      <Container className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-3 fw-bold mb-3"
        >
          Hi, I'm <span className="text-primary">Mirang Bhandari</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lead mb-4"
        >
          <TypewriterEffect text="A passionate Software Engineer with a knack for creating engaging web experiences." delay={50} />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" size="lg" href="#projects" className="me-3">View My Work</Button>
          <Button variant="outline-secondary" size="lg" href="#contact">Get in Touch</Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;