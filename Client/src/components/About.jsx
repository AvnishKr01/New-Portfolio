import { FaDownload } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-content">
                <div className="profile-img-container">
                    <div className="profile-placeholder object-contain">
                        <img className='object-contain' src="pic3.png" alt="profile picture" />
                    </div>
                </div>
                <div className="about-text">
                    <h2 className="section-title" style={{ textAlign: 'left', left: '0', transform: 'none' }}>About Me</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        I'm a dedicated Full Stack Developer with a knack for building robust and scalable web applications.
                        My journey in tech started with a curiosity for how things work on the internet, which quickly turned into a passion for coding.
                    </p>
                    <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        I specialize in modern JavaScript frameworks like React, Node.js, and have experience working with cloud technologies.
                        When I'm not coding, you can find me exploring new tech trends, contributing to open source, or gaming.
                    </p>
                    <a href="/resume.pdf" download="My_Resume.pdf" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <FaDownload /> Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
