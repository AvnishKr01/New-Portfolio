import React from 'react';
import doctor from '../assets/doctor.png';
import ecom from '../assets/ecommerce.png';
import project from '../assets/project.png'

const projectsData = [
    {
        title: 'E-Commerce Platform',
        description: 'A modern MERN e-commerce application with secure login, cart, and admin controls.',
        tags: ['React', 'Express', 'Tailwind', 'MongoDB'],
        image: ecom,
        liveUrl: 'https://forever-admin-prvh.onrender.com',
        codeUrl: 'https://github.com/AvnishKr01/Forever'
    },
    {
        title: 'Task Management App',
        description: 'Task Management Application: Create, track, and manage tasks with role-based access.',
        tags: ['React', 'Express', 'Tailwind', 'MongoDB'],
        image: project,
        liveUrl: 'https://promanage-client-ktgq.onrender.com',
        codeUrl: 'https://github.com/AvnishKr01/ProManage'
    },
    {
        title: 'Appointment Website',
        description: 'A modern MERN appointment website with secure login, cart, and admin controls.',
        tags: ['React', 'Express', 'Tailwind', 'MongoDB'],
        image: doctor,
        liveUrl: 'https://appointment-client.onrender.com',
        codeUrl: 'https://github.com/AvnishKr01/Appointment'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="glass-card project-card">
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                />
                            </div>
                            <h3>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="link-btn">
                                    <span>Code</span> ↗
                                </a>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-btn" style={{ color: 'var(--accent-secondary)' }}>
                                    <span>Live Demo</span> ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
