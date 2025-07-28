import React from 'react';

const jobs = [
  {
    company: 'WiseTech Global',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: 'Jul 2023 – Present',
      },
      {
        title: 'Software Engineer',
        dates: 'Oct 2022 – Jun 2023',
      },
    ],
    bullets: [
      'Led the engineering team behind the Earn and Learn program, which trained over 160 participants.',
      'Designed and developed a robust, scalable system used across the program, supporting complex execution workflows and dynamic user interaction.',
      'Championed the adoption of AI tools and techniques within the team, applying them across multiple projects.',
    ],
  },
  {
    company: 'Netconomy',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Jul 2020 – Oct 2022',
      },
    ],
    bullets: [
      'Delivered full-stack features across multiple agile teams, driving product innovation.',
      'Led a machine learning project to implement delivery time predictions.',
      'Conducted technical interviews and mentored new engineers to strengthen team expertise.',
    ],
  },
  {
    company: 'msgNetconomy',
    roles: [
      {
        title: 'Junior Software Engineer',
        dates: 'Nov 2018 – Jun 2020',
      },
      {
        title: 'Software Engineering Intern',
        dates: 'Aug 2018 – Nov 2018',
      },
    ],
    bullets: [
      'Implemented and optimized e-commerce features for enterprise clients.',
      'Facilitated developer workshops and knowledge transfer sessions to promote best practices.',
      'Completed an intensive trainee program focused on SAP Commerce Cloud platform.',
    ],
  },
  {
    company: 'NetCast',
    roles: [
      {
        title: 'Network Engineering Intern',
        dates: 'Mar 2018 – Aug 2018',
      },
    ],
    bullets: [
      'Maintained and configured CISCO core network devices for a regional ISP.',
      'Deployed and managed enterprise-level hardware in a modern data center environment.',
    ],
  },
];

const WorkExperience = () => (
  <section className="work-experience">
    <h2>Work Experience</h2>
    <ul className="job-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {jobs.map((job) => (
        <li key={job.company} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.2em' }}>{job.company}</h3>
          <div style={{ marginBottom: '0.5em' }}>
            {job.roles.map((role) => (
              <div
                key={role.title + role.dates}
                style={{ color: 'var(--muted)', fontSize: '1rem' }}
              >
                {role.title} &nbsp;|&nbsp; {role.dates}
              </div>
            ))}
          </div>
          {job.bullets && (
            <ul style={{ margin: '0.5em 0 0 1em', padding: 0, listStyle: 'disc' }}>
              {job.bullets.map((b) => (
                <li key={b} style={{ marginBottom: '0.2em' }}>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default WorkExperience;