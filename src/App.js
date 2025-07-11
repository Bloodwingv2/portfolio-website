import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="content-wrap">
      <AppNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Mirang Bhandari. All rights reserved.</p>
      </footer>
    </div>
    <BackToTopButton />
    </div>
  );
}

export default App;