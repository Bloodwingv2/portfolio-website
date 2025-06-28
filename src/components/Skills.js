import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const skills = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Framer Motion', icon: 'fas fa-bezier-curve' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Express.js', icon: 'fas fa-server' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'Generative AI', icon: 'fas fa-brain' },
  { name: 'LLMs', icon: 'fas fa-robot' },
  { name: 'Agentic AI', icon: 'fas fa-user-secret' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 display-4 fw-bold"
        >
          My Skills
        </motion.h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card m-2 p-3 text-center rounded shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
                >
                  <i className={`${skill.icon} fa-3x mb-2`}></i>
                  <p className="mb-0">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
