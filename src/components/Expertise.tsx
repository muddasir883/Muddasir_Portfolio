import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faFigma, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "Android Native",
    "Firebase",
    "PostgreSQL",
    "Java",
    "MySQL",
    "Github"
];

const labelsSecond = [
    "Figma",
    "Canva",
    "UI/UX",
    "Adobe Photoshop"
];

const labelsThird = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faAndroid} size="3x" />
                        <h3>Mobile App Development</h3>
                        <p>I have built a diverse array of mobile applications from scratch using modern technologies such as Flutter and Android Native. I have a strong proficiency in the SDLC process and Mobile + Backend Development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faFigma} size="3x" />
                        <h3>UI/UX Designing</h3>
                        <p>I am a proficient UI/UX designer with a strong focus on creating intuitive, user-centered digital experiences. My approach combines aesthetic design principles with functionality to ensure interfaces are not only visually appealing but also highly usable.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps</h3>
                        <p>I have basic knowledge of DevOps practices, including version control, CI/CD concepts, cloud services, and deployment workflows. I am continuously improving my skills and exploring modern tools and technologies used in DevOps environments</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;