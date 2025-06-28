import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AppNavbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar bg="dark" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={motion.a} whileHover={{ scale: 1.05 }} href="javascript:void(0)">Mirang Bhandari</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={motion.a} whileHover={{ scale: 1.05 }} href="#home" role="button">Home</Nav.Link>
              <Nav.Link as={motion.a} whileHover={{ scale: 1.05 }} href="javascript:void(0)">About</Nav.Link>
              <Nav.Link as={motion.a} whileHover={{ scale: 1.05 }} href="javascript:void(0)">Projects</Nav.Link>
              <Nav.Link as={motion.a} whileHover={{ scale: 1.05 }} href="javascript:void(0)">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
};

export default AppNavbar;