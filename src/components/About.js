import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 display-4 fw-bold"
        >
          About Me
        </motion.h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.p
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lead text-center mb-4"
            >
              Hello! I'm Mirang Bhandari, a Software Engineer with 2+ years of experience in building dynamic and unique Generative AI Based Applications. I specialize in Generative AI, Agentic AI, full-stack development, LLM's, and have a strong understanding of modern web technologies and Mordern frameworks to create end-end softwares.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-center"
            >
            </motion.p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;