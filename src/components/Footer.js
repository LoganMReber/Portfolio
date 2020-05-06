import React from 'react';

const Footer = (props) => {
  return (
    <div className='Footer'>
      <ul className='tabs'>
        <a href='#Projects' className='tab'>
          Projects
        </a>
        <a href='#' className='tab'>
          Resume
        </a>
        <a href='#' className='tab'>
          LinkedIn
        </a>
        <a href='#' className='tab'>
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
