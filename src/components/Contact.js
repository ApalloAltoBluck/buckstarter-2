import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { useState } from 'react';
// import { send } from 'emailjs-com';

import "./layout.scss"
import "./Contact.css";


function Contact() {
    // const [toSend, setToSend] = useState({
    //   from_name: '',
    //   to_name: 'Buckstarter',
    //   message: '',
    //   reply_to: '',
    // });
  
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   send(
    //     'service_cbpfuru',
    //     'template_af1g3od',
    //     toSend,
    //     'user_CbLWqlZiNA0paGpLlwoNa'
    //   )
    //     .then((response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     })
    //     .catch((err) => {
    //       console.log('FAILED...', err);
    //     });
    // };
  
    // const handleChange = (e) => {
    //   setToSend({ ...toSend, [e.target.name]: e.target.value });
    // };
  
    return (
      <div className='contact'>
        <form /*onSubmit={onSubmit}*/>
          <p>Your Email</p>
          <input type='text' id="email" name='reply_to' placeholder='name@example.com' /*value={toSend.reply_to} onChange={handleChange}*//>
            <br />
          <p>your Company</p>
          <input type='text' id="from" name='from_name' placeholder=' ' /*value={toSend.from_name} onChange={handleChange}*//>
            <br />
          <p>Message</p>
          <input type='text' id="message" name='message' placeholder=' ' /*value={toSend.message} onChange={handleChange}*//>
            <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

export default Contact
