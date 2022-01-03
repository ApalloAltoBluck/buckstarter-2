import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Popup from "../components/PopUp.js"; 

import ReactFullpage from '@fullpage/react-fullpage';

import CaseStudy from "../components/caseStudies";
import Layout from "../components/layout"
import Contact from "../components/Contact"
// import { useState } from 'react';
// import { send } from 'emailjs-com';
import Seo from "../components/seo"
import "../components/fullpage.css";

// function handleClick(event) {
//   const modal = document.querySelector(".modal")
//   const closeBtn = document.querySelector(".close")
//   modal.style.display = "block";
//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//   })
// }

// document.addEventListener("DOMContentLoaded",() => {
//   const the_button = document.querySelector(".js-btn")
//   the_button.addEventListener("click", handleClick)
// })

function IndexPage( state ) {
  // state = {
  //   seen: false
  // };
  // togglePop = () => {
  //   this.setState({
  //    seen: !this.state.seen
  //   });
  //  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
  <Layout>
    
    <Seo title="Buckstarter" />
    <section className="py-5 text-center container">
        <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
          <div className="page First">
            <p>welcome to</p>
            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
            <img className="slide-1-image" src={'buckstarter.png'} />
            </div>
          </div>
          <div className="section">
            
            <div className="page First">
            <p className="text-style-1">Buckstarter helps get brands moving. We give businesses stronger points-of-view and bigger presences in the marketplace, so they become more effective. We deliver deep branding experience in a more efficient operating model we call a “branding studio” rather than an “advertising agency”.</p>
            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
            <button>
              SIZZLE REEL
            </button>
            {console.log()}

            </div>
          </div>
          {/* Next page */}
          <div className="section">
            <div className="page Second">
              <h2>We organize around your needs.</h2>
              <div className="brandingimages">
                <figure>
                  <StaticImage src="../images/innovation.png" alt="Buckstarter innovation" />
                  <figcaption>Strategy, Design, Architecture, Purpose</figcaption>
                </figure>
                <figure>
                  <StaticImage src="../images/branding.png" alt="Buckstarter branding" />
                  <figcaption>Content production: digital, video, print, ultra-efficent</figcaption>
                </figure>
                <figure>
                  <StaticImage src="../images/production.png" alt="Buckstarter production" />
                  <figcaption>Brand narrative, advertising content</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="page Third">
              <h2><b>We operate as a "hive"</b></h2><br /><br />
              <p className="text-style-1">As a branding studio, we relentlessly focus on the end- product: the quality of the output. We cherry-pick the best designers, strategists, creative directors, media planners or buyers, producers, or directors needed to get the job done well. We "swarm" just the right talent around the brand. And we work fast, with little to no waste.</p>
            </div>
          </div>
          <div className="section">
            <div className="page Fourth">
              <div className="thework">
              <h2>The Work</h2>
              <p className="text-style-1">Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:</p>
              </div>
              <h3>Simplicity, Clarity, Allure.</h3>
              <div className="clients">
              <Container fluid="md">
                <Row>
                  <Col>                
                    <StaticImage src="../images/bnc.jpeg" alt="Black News Channel"  className="clientLogo" />
                    <div>
                      <input type="button" value="Click to Open Popup" onClick={togglePopup}/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                      {isOpen && <Popup content={
                        <> 
                          <b>Design your Popup</b><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <button>Test button</button>
                        </>}handleClose={togglePopup}/>}
                    </div>
                    <StaticImage src="../images/siggi.jpeg" alt="Siggi's"  className="clientLogo" />
                    <StaticImage src="../images/naturlich.png" alt="Naturlich yogurt" className="clientLogo"  />
                    <StaticImage src="../images/dagostino.jpeg" alt="D'agostino Law PLLC"  className="clientLogo" />
                  </Col>
                </Row>
              </Container>
                {/* <div class="modal">
                  <div class="modal_content">
                    <span class="close">&times;</span>
                    <CaseStudy path="../images/bnc.jpeg" title="BNC" about="this is a very intersting company"/>
                  </div>
                </div> */}
              {/* <CaseStudy path="../images/bnc.jpeg" title="BNC" about="this is a very intersting company"/> */}

              </div>{/*end of clients*/}
              {/* <button>
                Case Studies
              </button> */}
            </div>{/*end of page*/}
          </div>{/*end of section*/}
          <div className="section">
          <div className="page Fith">

            <div id="scottBkgDiv">
              <StaticImage src="../images/scott-bkg.png" alt="Scott" id="scottBkg"/>
              <div id="scottPfp">
                <StaticImage src="../images/scott.jpeg" alt="Scott" id="pfp"/>
              </div>
            </div>

            {/* <div className="meet-scott">
              <h2>Meet Scott</h2>
              <StaticImage src="../images/scott.jpeg" alt="Scott" id="pfp"/>
              <p>Founder of Bluckstarter LLC</p>
              <StaticImage src="../images/linkedin.png" alt="Linkedin" width={50} height={50}/>
              </div> */}


            </div>{/*end of page*/}
          </div>{/*end of section*/}
          <div className="section">
            <div className="page Sixth">
              <h2>Get in contact</h2>
              <p>Thanks for visiting. We'd love to hear from you. Better yet, we'd love to work with you. Use the form below and we will quickly get back to you. Let's get started!</p>
              <Contact />
            </div>
          </div>
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
              <h2>Client Spotlight:Black News Channel</h2>
              <p>Gone are the days of 'rip & read' unbiased mainstrem news reporting. Today, news is interpreted, rewritten and "spun" to the prevailing taste of a specific audience. So, in partnership with Carol H Williams Advertising, Buckstarter created the new logo for the first-ever 24-hour cable news platform dedicated to black news, the Black News Channel. Inspired by the positive impacts Black culture has had on mainstream culture, the "Illuminating Suns" imagery drives home our guiding principle that mainstream news should not treat the news of the AA community as invisible. Rather it should shine a light on a positive new day forward.</p>
            </div>
          </div>
          <div className="section">
            <div className="page Nine">
              <div id="reel">
                <StaticImage src="../images/bnc.jpeg" alt="Black News Channel"  className="clientLogo" />
              </div>
              <h2>We are Buckstarter: Sizzle reel</h2>
              <p>As a branding studio, we relentlessly focous on the end-product: the quality of the output. We cherry-pick the best designers, strategists, creative directors, media planners or buyers, producers, or directors needed to get the job done well. We "swarm" just the right talent around the brand. And we work fast, with little to no waste.</p>
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
