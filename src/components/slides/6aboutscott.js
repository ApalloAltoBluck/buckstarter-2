import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import scott from "../../images/scott.jpeg"
import linkedIn from "../../images/linkedin.png"


const AboutScott = () => {
  
    return (     
    <div className="section Fifth"> 
          <div className="flex flex-col ">
            <div class="align-middle mx-24 mt-44 ">
              <h2 className="text-3xl md:text-4xl lg:text-6xl text-white">Meet Scott</h2>
              <img className=" relative mt-10 mx-auto md:w-1/6 rounded-full" src={scott} alt="Buckstarter branding" />
              <p className=" pt-3 text-sm md:text-4xl lg:text-xl text-white">Founder of Buckstarter LLC</p>
              <img className=" relative w-1/3 mt-10 mx-auto md:w-1/12 rounded-full" src={linkedIn} alt="Buckstarter branding" onClick={()=> window.open("https://www.linkedin.com/in/scott-buckley-b55351b/", "_blank")}/>
            </div>
          </div>
    </div> )}
export default AboutScott