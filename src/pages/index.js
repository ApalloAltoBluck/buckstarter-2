import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import 'react-bootstrap';
import { Container, Component } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Burger from "../components/burger"

import PopupWindow from '../components/PopUp.js';

import HomeSlide from  "../components/slides/1homeslide"
import AboutBS from "../components/slides/2aboutslide"
import Service from "../components/slides/3serviceslide"
import HiveSlide from "../components/slides/4hiveslide"
import TheWork from "../components/slides/5thework"
import AboutScott from "../components/slides/6aboutscott"
import ContactSlide from "../components/slides/7contactslide"

import SIGPopupWindow from '../components/SIGpopup.js';
import Popup from 'reactjs-popup';
// import * as PopUp from "../components/PopUp.js"; 

import ReactFullpage from '@fullpage/react-fullpage';

import CaseStudy from "../components/caseStudies";
import Layout from "../components/layout"
import Contact from "../components/Contact"
// import { useState } from 'react';
// import { send } from 'emailjs-com';
import Seo from "../components/seo"
import "../components/fullpage.css";


const Header = () => {
  return (
    <div className="static w-full z-30">
    <img className=" mx-auto w-1/5 md:w-1/12 z-10 " src={'/logo.jpg'}  />
    <Burger right/>

    </div>

  )
}


function IndexPage(props) {

  const [firstPage, setFirstPage] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const imageClick = () => {
    console.log('Click');
  } 

  return (
  <Layout>
    <Header isFirstPage={isOpen}></Header>
    <Seo title="Buckstarter" />
    <section className="py-5 text-center container">
        <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <HomeSlide className="section" />
          <AboutBS  className="section"/>
          <Service  className="section"/>
          <HiveSlide className="section" />
          <TheWork />
          <AboutScott className="section" />
          <ContactSlide />
        

          
          <div className="section">
            <div className="page Seventh">
              <h2>Case Studies</h2>
              <Container fluid="md">
                <Row>
                  <Col>                
                    <StaticImage src="../images/bnc.jpeg" alt="Black News Channel"  className="clientLogo" />
                    <StaticImage src="../images/siggi.jpeg" alt="Siggi's"  className="clientLogo" />
                    <StaticImage src="../images/naturlich.png" alt="Naturlich yogurt" className="clientLogo"  />
                    <StaticImage src="../images/dagostino.jpeg" alt="D'agostino Law PLLC"  className="clientLogo" />
                    <StaticImage src="../images/upcycle.png" alt="upcycle"  className="clientLogo" />
                    <StaticImage src="../images/InternationalCopper.png" alt="International Copper"  className="clientLogo" />
                    <StaticImage src="../images/miamiDadeCounty.jpeg" alt="Miami Dade County"  className="clientLogo" />
                    <StaticImage src="../images/crowdster.jpeg" alt="Crowdster"  className="clientLogo" />
                    <StaticImage src="../images/waterGarden.png" alt="Water Garden"  className="clientLogo" />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="section">
            <div className="page Eighth">
              <div className="clientSpotlight">
                <StaticImage src="../images/bnc.jpeg" alt="Black News Channel"  className="clientLogo" />
              </div>
              <h2>Client Spotlight: Black News Channel</h2>
              <p>Gone are the days of 'rip & read' unbiased mainstream news reporting. Today, news is interpreted, rewritten and "spun" to the prevailing taste of a specific audience. So, in partnership with Carol H Williams Advertising, Buckstarter created the new logo for the first-ever 24-hour cable news platform dedicated to black news, the Black News Channel. Inspired by the positive impacts Black culture has had on mainstream culture, the "Illuminating Suns" imagery drives home our guiding principle that mainstream news should not treat the news of the AA community as invisible. Rather it should shine a light on a positive new day forward.</p>
            </div>
          </div>
          <div className="section">
            <div className="page Nine">
              <div id="reel">
                <StaticImage src="../images/bnc.jpeg" alt="Black News Channel"  className="clientLogo" />
              </div>
              <h2>We are Buckstarter: Sizzle reel</h2>
              <p>As a branding studio, we relentlessly focus on the end-product: the quality of the output. We cherry-pick the best designers, strategists, creative directors, media planners or buyers, producers, or directors needed to get the job done well. We "swarm" just the right talent around the brand. And we work fast, with little to no waste.</p>
            </div>
          </div>
          
        </ReactFullpage.Wrapper>
      );
    }}
  />
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
     
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section>
  </Layout>
  )
}

export default IndexPage
