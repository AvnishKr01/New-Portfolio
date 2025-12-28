
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            I'm <span className="gradient-text">Avnish Kumar</span>
          </h1>
          <p className="hero-subtitle">
            I am Avnish Kumar, a MERN Stack Developer skilled in building modern full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy creating clean, scalable, and user-focused solutions while continuously improving my development skills.
          </p>
          <div className="hero-actions">
            <a href="https://www.linkedin.com/in/avnish-kumar-4a8064270/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', gap: '0.5rem' }}>
              <FaLinkedin /> Let's Connect
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <FaFileAlt /> View Resume
            </a>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-img-placeholder">
              {/* Replace this span with <img src="/your-image.jpg" /> */}
              <img src="pic3.png" alt="profile picture" />
              <span></span>
            </div>
            {/* Floating Tech Icons */}
            <div className="tech-float tf-1">⚛️</div>
            <div className="tech-float tf-2">🚀</div>
            <div className="tech-float tf-3">💻</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
