import React from 'react';
import './Education.css';

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: 'Union University, School of Computing',
    year: 'Class of 2021',
  },
  {
    degree: 'MITx: Biochemistry',
    institution: 'MIT',
    link: 'https://courses.edx.org/certificates/5687ff25d3aa458abbd70c3f3cc47e2d',
  },
  {
    degree: 'Coursera: Anatomy',
    institution: 'University of Michigan',
    link: 'https://www.coursera.org/account/accomplishments/specialization/DCWCCDQRE6RY',
  },
];

const Education = () => (
  <section className="education">
    <h2 className="education__title">Education & Certificates</h2>
    <ul className="education__list">
      {education.map((ed) => (
        <li className="education__item" key={ed.degree}>
          <h3 className="education__degree">{ed.degree}</h3>
          <span className="education__institution">
            {ed.institution}
            {ed.link && (
              <>
                &nbsp;|&nbsp;
                <a
                  className="education__link"
                  href={ed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </>
            )}
            {!ed.link && ed.year && <>&nbsp;|&nbsp;{ed.year}</>}
          </span>
          {ed.description && <p className="education__description">{ed.description}</p>}
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
