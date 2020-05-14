import React from 'react';
import Project from './Project';
const Projects = (props) => {
  const projects = [
    {
      name: 'Space Walkers',
      img: './spacewalkers.png',
      alt: 'Space Walkers Site',
      body:
        'This is a project where the primary goal was to build a site that matched a design document visually from scratch. The major technical issues to address were all about having a thorough understanding of CSS.',
      site: 'https://css-demo-logan-reber.netlify.app/',
      code: 'https://github.com/LoganMReber/Sprint-Challenge--Advanced-CSS'
    },
    {
      name: 'Caster Card Game',
      img: './spacewalkers.png',
      alt: 'Caster Site',
      body:
        'This is a project where the primary goal was to build a site that matched a design document visually from scratch. The major technical issues to address were all about having a thorough understanding of CSS.',
      site: 'https://css-demo-logan-reber.netlify.app/',
      code: 'https://github.com/LoganMReber/Sprint-Challenge--Advanced-CSS'
    }
  ];
  return (
    <div id='Projects' className='Projects'>
      <h1>Projects</h1>
      <div className='list'>
        {projects.map((p) => (
          <Project project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
