import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import innovation from "../../images/innovation.png"
import branding from "../../images/branding.png"
import production from "../../images/production.png"


const ServiceSlide = () => {
    return ( <div className="section h-screen">
        <div className="mx-5 mt- md:mt-16 lg:mt-36">
       <h2 className="text-2xl md:text-4xl lg:text-6xl">We organize around your needs.</h2>
        <div className="flex flex-col lg:flex-row">
          <figure className="w-full ">
            <img className="ml-8 w-3/4 md:w-3/4 md:ml-20" src={innovation} alt="Buckstarter innovation" />
            <p className="text-center">Strategy, Design, Architecture, Purpose</p>
          </figure>
          <figure  className="w-full ">
          <img className="ml-8 w-3/4 md:w-3/4 md:ml-20" src={branding} alt="Buckstarter branding" />
            <p className="text-center">Content production: digital, video, print, ultra-efficent</p>
          </figure>
          <figure  className="w-full">
          <img className="ml-8 w-3/4 md:w-3/4 md:ml-20" src={production} alt="Buckstarter production" />
            <p className="text-center">Content production: digital, video, print, ultra-efficent</p>
          </figure>
        </div>
  </div></div>) }
export default ServiceSlide