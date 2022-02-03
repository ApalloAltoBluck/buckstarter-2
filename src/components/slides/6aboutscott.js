import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import scott from "../../images/scott.jpeg"


const AboutScott = () => {
  
    return (     
    <div className="section"> 
          <div id="">
            <StaticImage src="../images/scott.jpeg" alt="Scott" id="pfp" className="z-10"/>
            <img className="ml-" src={scott} alt="Buckstarter branding" />
          </div>
    </div> )}
export default AboutScott