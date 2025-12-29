import React from 'react';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma,
    FaPuzzlePiece, FaUsers, FaSyncAlt, FaComments, FaChalkboardTeacher, FaInfinity, FaGithub, FaJava
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiThreedotjs,
    SiExpress, SiPostgresql, SiMongodb, SiGraphql, SiJest, SiVite, SiPostman,
    SiJavascript, SiCplusplus, SiC, SiMysql
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillsData = [
    {
        category: 'Programming Languages',
        icon: '💻',
        color: '#00ff88', // Neon Green
        items: [
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Python', icon: <FaPython /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'C', icon: <SiC /> },
            { name: 'SQL', icon: <SiMysql /> }
        ]
    },
    {
        category: 'Frontend',
        icon: '🎨',
        color: '#ff0080', // Neon Pink
        items: [
            { name: 'React', icon: <FaReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'Three.js', icon: <SiThreedotjs /> },
            { name: 'HTML5/CSS3', icon: <><FaHtml5 /> <FaCss3Alt /></> }
        ]
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: '#00ffcc', // Neon Cyan
        items: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Python', icon: <FaPython /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'REST APIs', icon: <TbApi /> }
        ]
    },
    {
        category: 'Tools & DevOps',
        icon: '🛠️',
        color: '#7000ff', // Electric Purple
        items: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'GitHub', icon: <FaGithub /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Figma', icon: <FaFigma /> },
            { name: 'Vite', icon: <SiVite /> }
        ]
    }
];

const Skills = () => {
    const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName('skill-glass-wrapper');
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <section id="skills" className="skills" onMouseMove={handleMouseMove}>
            {/* Background Blobs for Glass Effect */}
            <div className="blob blob-3"></div>
            <div className="blob blob-4"></div>

            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skill-glass-wrapper">
                    <div className="skills-container-compact">
                        {skillsData.map((skillGroup, index) => (
                            <div key={index} className="skill-row-compact">
                                <h3>
                                    <span style={{ fontSize: '1.5rem' }}>{skillGroup.icon}</span>
                                    {skillGroup.category}
                                </h3>
                                <div className="skill-row-content">
                                    {skillGroup.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="skill-item"
                                            style={{ '--glow-color': skillGroup.color }}
                                        >
                                            <span className="skill-item-icon">{item.icon}</span>
                                            <span className="skill-item-name">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
