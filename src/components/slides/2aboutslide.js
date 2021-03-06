import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const AboutBS = (props) => {
    return (  
    <div className="section" >  

    <div className="flex flex-col align-middle table-cell " >
    <h1 className="header-portion">Greetings from the studio</h1>   
    <p className="body-portion">Buckstarter helps get brands moving. We give businesses stronger points-of-view and bigger presences in the marketplace, so they become more effective. We deliver deep branding experience in a more efficient operating model we call a “branding studio” rather than an “advertising agency”.</p>
    <div class="pt-3">
      <button className='button bg-black text-white bold px-3 py-2 rounded-xl text-lg' onClick={() => props.fullpageApi.moveTo(6, 0)}>
        WATCH SIZZLE REEL
      </button>
    </div>

    </div>
  </div>) }
export default AboutBS