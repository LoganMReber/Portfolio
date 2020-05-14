import React from 'react';
const Project = (props) => {
  const p = props.project;
  return (
    <div className='Project'>
      <h3 className='head'>{p.name}</h3>
      <div className='body'>
        <img src={p.img} alt={p.alt} />
        <div className='right'>
          <p>{p.body}</p>
          <div className='links'>
            <a href={p.site} target='_blank' rel='noopener noreferrer'>
              Site
            </a>
            <a href={p.code} target='_blank' rel='noopener noreferrer'>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
