import React from 'react';

const Contact = (props) => {
  return (
    <div id='Contact' className='Contact'>
      <h1>Contact Me</h1>
      <form>
        <div>
          <label htmlFor='Name'>Name:</label>
          <label htmlFor='Email'>Email:</label>
        </div>
        <div>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
        </div>
        <div>
          <label htmlFor='Subject'>Subject:</label>
          <label htmlFor='Category'>Category:</label>
        </div>
        <div>
          <input type='text' placeholder='Subject' />
          <select name='Category'>
            <option>Employment</option>
            <option>Contract Work</option>
            <option>Tutoring</option>
          </select>
        </div>

        <label htmlFor='Message'>Message:</label>
        <textarea name='Message' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
