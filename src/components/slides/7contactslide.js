import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const ContactSlide = () => {
    return (     
        <div className="section">
        <div className="page Sixth ">
          <h2 className='text-2xl md:text-4xl lg:text-6xl'>Get in contact</h2>
          <p className='pt-10 text-xl leading-loose md:text-3xl md:leading-loose lg:text-2xl lg:leading-normal'>Thanks for visiting. We'd love to hear from you. Better yet, we'd love to work with you. Use the form below and we will quickly get back to you. Let's get started!</p>
          <div className='contact'>
        <form /*onSubmit={onSubmit}*/ className='text-base md:text-2xl lg:text-2xl'>
          <p >Your Email</p>
          <input type='text' id="email" name='reply_to' placeholder='name@example.com' className=' p-1 border border-black '/*value={toSend.reply_to} onChange={handleChange}*//>
            <br />
          <p>Your Company</p>
          <input type='text' id="from" name='from_name' placeholder=' ' className=' p-1 border border-black '/*value={toSend.from_name} onChange={handleChange}*//>
            <br />
          <p>Message</p>
          <input type='text' id="message" name='message' placeholder=' ' className=' p-1 border border-black break-all'/*value={toSend.message} onChange={handleChange}*//>
            <br />
          <div className="mt-10 ">
            <button type='submit' className='bg-black text-white bold px-5 py-1 rounded-xl'>Submit</button>
          </div>
        </form>
      </div>
        </div>
      </div> )}

      
export default ContactSlide



