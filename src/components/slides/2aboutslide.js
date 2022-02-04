import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const AboutBS = (props) => {
    return (  
    <div className="section">     
    <div className=" mx-5  mt-40 md:mt-28 md:mx-52 lg:mt-80" >
    <p className="text-xl leading-loose  md:text-3xl md:leading-loose lg:text-4xl lg:leading-loose">Buckstarter helps get brands moving. We give businesses stronger points-of-view and bigger presences in the marketplace, so they become more effective. We deliver deep branding experience in a more efficient operating model we call a “branding studio” rather than an “advertising agency”.</p>
    {/* <button onClick={() => fullpageApi.moveSectionDown()}>
      Click me to move down
    </button> */}
    <div class="pt-3">
      <button className='button bg-black text-white bold px-3 py-1 rounded-xl text-lg' onClick={() => props.fullpageApi.moveTo(6, 0)}>
        WATCH OUR SIZZLE REEL
      </button>
    </div>

    </div>
  </div>) }
export default AboutBS