import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-simple">
        <p className="footer-copyright">© {currentYear} AK. All rights reserved.</p>
        <div className="footer-social-icons">
          <a href="avnish011kumar@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/avnish-kumar-4a8064270/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/AvnishKr01" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.instagram.com/avnishh___?igsh=MXR5eDQ4djZsMmh1OQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <p className="footer-made-with">Made with <FaHeart className="heart-icon" /> React</p>
      </div>
    </footer>
  );
};

export default Footer;
