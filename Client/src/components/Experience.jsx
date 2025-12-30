import React from 'react';
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';
// import tcs from '../assets/tcs.jpg';
// import microsoft from '../assets/MICRO.jpg';
import tcs from "../assets/TCS.pdf";
import microsoft from "../assets/Microsoft.pdf";

const experienceData = [
    {
        title: 'Full Stack Developer',
        company: 'Unified Mentor',
        duration: 'Jan-2025 - Mar-2025',
        description: 'Developed and maintained web applications using React, Node.js, and modern technologies.',
        icon: <HiOfficeBuilding />
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Adore Simtrak',
        duration: 'Oct-2024 - Dec-2025',
        description: 'Built responsive UI components and collaborated with the design team.',
        icon: <FaBriefcase />
    }
];

const certificationsData = [
    {
        title: 'TCS iON Career Edge - Young Professional',
        issuer: 'TCS',
        date: '2025',
        description: '',
        icon: <FaCertificate />,
        color: '#00ffcc',
        certificateUrl: tcs
    },
    {
        title: 'Web Development',
        issuer: 'Microsoft',
        date: '2025',
        description: 'Complete web development',
        icon: <FaCertificate />,
        color: '#ff0080',
        certificateUrl: microsoft
    }
];

const rewardsData = [
    {
        title: 'College SIH',
        event: 'Hackathon 2025',
        description: 'Won first place for innovative web application.',
        icon: <FaTrophy />,
        color: '#FFD700'
    },
    // {
    //     title: 'Dean\'s List',
    //     event: 'University',
    //     description: 'Achieved academic excellence with top GPA.',
    //     icon: <FaMedal />,
    //     color: '#00ffcc'
    // }
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience & Achievements</h2>

                <div className="experience-main-grid">
                    {/* Experience Column */}
                    <div className="experience-column">
                        <h3 className="experience-heading">
                            <FaBriefcase />
                            Work Experience
                        </h3>
                        <div className="timeline">
                            {experienceData.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-icon">
                                        {exp.icon}
                                    </div>
                                    <div className="timeline-content">
                                        <h4>{exp.title}</h4>
                                        <span className="company">{exp.company}</span>
                                        <span className="duration">{exp.duration}</span>
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="certifications-column">
                        <h3 className="experience-heading">
                            <FaCertificate />
                            Certifications
                        </h3>
                        <div className="certifications-list">
                            {certificationsData.map((cert, index) => (
                                <div
                                    key={index}
                                    className="certification-card"
                                    style={{ '--card-color': cert.color }}
                                >
                                    <div className="certification-icon">
                                        {cert.icon}
                                    </div>
                                    <div className="certification-content">
                                        <h4>{cert.title}</h4>
                                        <span className="certification-issuer">{cert.issuer}</span>
                                        <span className="certification-date">{cert.date}</span>
                                        <p>{cert.description}</p>
                                        <a
                                            href={cert.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="view-certificate-btn"
                                        >
                                            <FaExternalLinkAlt />
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rewards Column */}
                    <div className="rewards-column">
                        <h3 className="experience-heading">
                            <FaTrophy />
                            Rewards
                        </h3>
                        <div className="rewards-list">
                            {rewardsData.map((reward, index) => (
                                <div
                                    key={index}
                                    className="reward-card"
                                    style={{ '--card-color': reward.color }}
                                >
                                    <div className="reward-icon">
                                        {reward.icon}
                                    </div>
                                    <div className="reward-content">
                                        <h4>{reward.title}</h4>
                                        <span className="reward-event">{reward.event}</span>
                                        <p>{reward.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
