import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import innovation from "../../images/innovation.png"
import branding from "../../images/branding.png"
import production from "../../images/production.png"


const ServiceSlide = () => {
    return ( <div className="section h-screen">
        <div className="flex table-cell my-auto align-middle ">
       <h2 className="header-portion">We organize around your needs.</h2>
        <div className="flex flex-col mx-14 lg:ml- lg:flex-row md:mt-28">
          <figure className="w-full ">
            <img className="md:w-3/4" src={innovation} alt="Buckstarter innovation" />
            <p className="text-center lg:text-left md:text-2xl">Strategy, Design,<br></br> Architecture, Purpose</p>
          </figure>
          <figure  className="w-full ">
          <img className="  md:w-3/4" src={branding} alt="Buckstarter branding" />
            <p className="text-center md:text-left md:text-2xl">Content production: digital, <br></br> video, print, ultra-efficent</p>
          </figure>
          <figure  className="w-full">
          <img className="w-80 md:w-3/4" src={production} alt="Buckstarter production" />
            <p className="text-center md:text-left md:text-2xl">Content production: digital, video, print, ultra-efficient
</p>
          </figure>
        </div>
  </div></div>) }
export default ServiceSlide