import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const ContactSlide = () => {
    return (     
        <div className="section">
        <div className="page ">
          <h2 className='header-portion'>Get in contact</h2>
          <p className='body-portion'>Thanks for visiting. We'd love to hear from you. Better yet, we'd love to work with you. Use the form below and we will quickly get back to you. Let's get started!</p>
          <div className='contact mt-5'>
        <form /*onSubmit={onSubmit}*/ className=' w-100 text-base md:text-2xl mx-auto lg:text-2xl'>
          <p >Your Email</p>
          <input type='text' id="email" name='reply_to' placeholder='name@example.com' className='p-1 border border-black lg:w-1/2'/*value={toSend.reply_to} onChange={handleChange}*//>
            <br />
          <p className="mt-3">Your Company</p>
          <input type='text' id="from" name='from_name' placeholder=' ' className=' p-1 border border-black lg:w-1/2'/*value={toSend.from_name} onChange={handleChange}*//>
            <br />
          <p className="mt-3">Message</p>
          <textarea type='text' id="message" name='message' placeholder=' ' className=' p-1 border border-black break-all lg:w-1/2 '/*value={toSend.message} onChange={handleChange}*//>
            <br />
          <div className="mt-10 ">
            <button type='submit' className='bg-black text-white bold px-5 py-1 rounded-xl'>Submit</button>
          </div>
        </form>
      </div>
        </div>
      </div> )}

      
export default ContactSlide



