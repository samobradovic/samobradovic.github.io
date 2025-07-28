import React from 'react';
import './Skills.css';

const skills = [
  'Design and development of complex, scalable software systems',
  'Software engineering for scientific and enterprise applications',
  'Machine learning and data analysis',
  'Experience with bioinformatics data formats and basic tooling',
  'DevOps and reproducibility',
  'Cloud development and deployment',
  'Collaborative software development practices',
];

const Skills = () => (
  <section className="skills">
    <h2 className="skills__title">Skills</h2>
    <ul className="skills__list">
      {skills.map((skill) => (
        <li key={skill} className="skills__item">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
