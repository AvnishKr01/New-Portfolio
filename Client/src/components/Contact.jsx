import React, { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const sectionRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleMouseMove = (e) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section
            id="contact"
            className="contact"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
        >
            <div
                className="spotlight-overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(112, 0, 255, 0.1), transparent 40%)`,
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />

            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content-grid">
                    <div className="contact-info">
                        <h2>Let's Create Something Amazing Together.</h2>
                        <p>
                            Have a project in mind? Looking to partner or work together?
                            Reach out through the form and I'll get back to you in the next 48 hours.
                        </p>
                        <div className="social-links">
                            <a href="avnish011kumar@gmail.com" className="social-btn mail"><FaEnvelope /></a>
                            <a href="https://www.linkedin.com/in/avnish-kumar-4a8064270/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin"><FaLinkedin /></a>
                            <a href="https://github.com/AvnishKr01" target="_blank" rel="noopener noreferrer" className="social-btn github"><FaGithub /></a>
                            <a href="https://www.instagram.com/avnishh___?igsh=MXR5eDQ4djZsMmh1OQ==" target="_blank" rel="noopener noreferrer" className="social-btn instagram"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <div className="blob blob-1"></div>
                        <div className="blob blob-2"></div>
                        <div className="glass-card">
                            {isSubmitted ? (
                                <div className="success-message">
                                    <h3>Message Sent! 🚀</h3>
                                    <p>Thanks for reaching out. I'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" className="form-input" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" className="form-input" placeholder="Tell me about your project..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary submit-btn">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
