import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Contact = (props) => {
  const [mail, setMail] = useState({
    from: '"Portfolio Website" <logan-reber-mailer@localhost:4000>',
    to: 'loganmreber@gmail.com',
    subject: '',
    html: ''
  });
  const [form, setForm] = useState({
    name: 'Anonymous',
    email: 'Not Given',
    subject: 'Empty',
    category: 'None',
    text: 'Nothing written'
  });
  const sendMail = (event) => {
    event.preventDefault();
    setMail({
      ...mail,
      subject: `${form.subject} - (${form.category})`,
      html: `<h3>Sender: ${form.name}</h3><h3>Email: ${form.email}</h3><p>${form.text}</p>`
    });
  };
  useEffect(() => {
    if (mail.html.length) {
      axios
        .post('https://logan-reber-mailer.herokuapp.com/portfolio-contact/', {
          ...mail
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [mail]);
  return (
    <div id='Contact' className='Contact'>
      <h1>Contact Me</h1>
      <form>
        <div>
          <label htmlFor='Name'>Name:</label>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type='text'
            placeholder='Name'
          />
        </div>
        <div>
          <label htmlFor='Email'>Email:</label>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type='email'
            placeholder='Email'
          />
        </div>
        <div>
          <label htmlFor='Subject'>Subject:</label>
          <input
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            type='text'
            placeholder='Subject'
          />
        </div>
        <div>
          <label htmlFor='Category'>Category:</label>
          <select
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            name='Category'
            defaultValue='Choose'
          >
            <option value='Choose' hidden disabled>
              ---Choose One---
            </option>
            <option value='Employment'>Employment</option>
            <option value='Contract'>Contract Work</option>
            <option value='Tutoring'>Tutoring</option>
          </select>
        </div>

        <label htmlFor='Message'>Message:</label>
        <textarea
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          name='Message'
        />
        <button onClick={sendMail}>Submit</button>
      </form>
    </div>
  );
};
export default Contact;
