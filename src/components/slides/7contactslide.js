import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const ContactSlide = () => {
    return (     
        <div className="section">
        <div className="page Sixth">
          <h2>Get in contact</h2>
          <p>Thanks for visiting. We'd love to hear from you. Better yet, we'd love to work with you. Use the form below and we will quickly get back to you. Let's get started!</p>
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
        </div>
      </div> )}

      
export default ContactSlide



