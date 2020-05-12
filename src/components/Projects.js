import React from 'react';

const Projects = (props) => {
  return (
    <div id='Projects' className='Projects'>
      <h1>Projects</h1>
      <div className='project-entry'>
        <h3 className='project-head'>Space Walkers</h3>
        <div className='project-body'>
          <img src='./spacewalkers.png' alt='Space Walkers Site' />
          <div>
            <p>
              This is a project where the primary goal was to build a site that
              matched a design document visually from scratch. The major
              technical issues to address were all about having a comprehensive
              understanding of CSS.
            </p>
            <a
              href='https://css-demo-logan-reber.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Site
            </a>
            <a
              href='https://github.com/LoganMReber/Sprint-Challenge--Advanced-CSS'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
