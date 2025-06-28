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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg me-3"
            onClick={() => window.location.href = '#projects'}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline-secondary btn-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;