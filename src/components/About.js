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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lead text-center mb-4"
            >
              Hello! I'm Mirang Bhandari, a passionate [Your Profession] with X years of experience in building dynamic and user-friendly web applications. I specialize in [Your Specialization, e.g., frontend development, full-stack development] and have a strong understanding of modern web technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              My journey in web development started with a curiosity for how things work on the internet, which quickly evolved into a passion for creating intuitive and visually appealing digital experiences. I am always eager to learn new technologies and improve my skills to deliver high-quality solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-4"
            >
              <h4>Skills:</h4>
              <ul className="list-inline">
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>React</motion.li>
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>JavaScript</motion.li>
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>HTML5</motion.li>
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>CSS3</motion.li>
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>Bootstrap</motion.li>
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>Framer Motion</motion.li>
                <motion.li className="list-inline-item badge bg-primary m-1" whileHover={{ scale: 1.1 }}>Git</motion.li>
                {/* Add more skills as needed */}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;