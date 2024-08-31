import React, { useState, useEffect } from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Typed from 'typed.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed('.typed-text', {
      strings: ['Programming.', 'Problem Solving.', 'Web Development.', 'Android Development.', 'Networking.'],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">Portfolio</h1>
          <div className={`navbar-menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li className="navbar-close-btn" onClick={closeMenu}><i className="bx bx-x"></i></li>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="home-content">
          <h4>Hello, It's Me</h4>
          <h1>PERIASAMY</h1>
          <h4>
          Currently pursuing a Master of Computer Applications at CEG, Anna University, Chennai. Deeply passionate in <span className="typed-text"></span>
          </h4>
          <div className="img">
            <img src="/images/Mine.jpg" className="responsive" alt="main" />
          </div>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/periasamy-s-bbaaa2227" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://instagram.com/perrie_d.platypus" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.facebook.com/share/da2MHXBCE9UvVJit/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
            <a href="https://github.com/Periasamy147" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          </div>
          <a href="/Resume.pdf" className="btn-box" target="_blank" rel="noopener noreferrer" download>
            Download Resume
          </a>
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-img">
            <img src="/images/DSC01067.jpg" className="abt-res" alt="about" />
          </div>
          <div className="about-text">
            <h2>About <span>Me</span></h2>
            <div className="about-text-container">
              <p>I'm an MCA student specializing in web development. My passion lies in crafting user-friendly and visually captivating websites. I thrive on collaborating with teams to solve challenges and bring ideas to fruition. Continuously learning, I aim to stay ahead in this dynamic field and contribute innovatively. My goal is to become a full-stack web developer.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">Skills Section</section>
      <section id="projects">Projects Section</section>
      <section id="contact">Contact Section</section>
    </div>
  );
}

export default App;
