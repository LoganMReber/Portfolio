import React from 'react';

const Footer = (props) => {
  return (
    <div className='Footer'>
      <ul className='tabs'>
        <a href='#Projects' className='tab'>
          Projects
        </a>
        <a
          href='https://docs.google.com/document/d/1NpDmHSoz0_0rH7n2DOaFbNw3A6Y9Z73USxZBvFKefHw/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='tab'
        >
          Resume
        </a>
        <a
          href='https://www.linkedin.com/in/logan-reber/'
          target='_blank'
          className='tab'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/LoganMReber'
          target='_blank'
          className='tab'
          rel='noopener noreferrer'
        >
          Github
        </a>
        <a href='#Contact' className='tab'>
          Contact
        </a>
        <a href='#Home' className='tab'>
          Back to the Top
        </a>
      </ul>
      <div className='credits'>
        <p>Last Updated: May 5, 2020 &copy; Logan Reber 2020</p>
      </div>
    </div>
  );
};

export default Footer;
