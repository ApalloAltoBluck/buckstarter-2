import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import innovation from "../../images/innovation.png"
import branding from "../../images/branding.png"
import production from "../../images/production.png"


const ServiceSlide = () => {
    return ( <div className="section pt-5 h-screen">
        <div className="">
       <h2 className="text-2xl">We organize around your needs.</h2>
        <div className="flex flex-col md:flex-row">
          <figure className="w-full">
            <img className="w-1/2 md:w-full" src={innovation} alt="Buckstarter innovation" />
            <p className="text-left">Strategy, Design, Architecture, Purpose</p>
          </figure>
          <figure  className="w-full ">
          <img className="w-1/2 md:w-full" src={branding} alt="Buckstarter innovation" />
            <p className="text-left">Content production: digital, video, print, ultra-efficent</p>
          </figure>
          <figure  className="w-full">
          <img className="w-1/2 md:w-full" src={production} alt="Buckstarter innovation" />
            <p className="text-left">Content production: digital, video, print, ultra-efficent</p>
          </figure>
        </div>
  </div></div>) }
export default ServiceSlide