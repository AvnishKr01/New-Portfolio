import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="navbar-brand" onClick={() => scrollToSection('home')}>
                    AK
                </div>

                <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
                    <button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
                    <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
                    <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
