// Skills.js
import React from 'react';
import './Skills.css'; // Ensure this CSS file is created/updated

const skillsData = [
  { skill: 'HTML & CSS', level: 99 },
  { skill: 'JavaScript', level: 95},
  { skill: 'React', level: 90 },
  { skill: 'Python', level: 85},
  { skill: 'SQL', level: 80 },
  { skill: 'Figma', level:75},
  
];

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skillsData.map((skillItem, index) => (
          <div className="skill-card" key={index}>
            <h2>{skillItem.skill}</h2>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skillItem.level}%` }}
              >
                {skillItem.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
