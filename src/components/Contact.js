import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 display-4 fw-bold"
        >
          Contact Me
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
              Have a question or want to work together? Feel free to reach out!
            </motion.p>
            <Form as={motion.form}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit" disabled>
                Submit (Non-functional demo)
              </Button>
            </Form>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-5"
            >
              <h4>Or find me on:</h4>
              <ul className="list-inline">
                <motion.li className="list-inline-item" whileHover={{ scale: 1.1 }}><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></motion.li>
                <motion.li className="list-inline-item" whileHover={{ scale: 1.1 }}><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></motion.li>
                {/* Add more social media links as needed */}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;