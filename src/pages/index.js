import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, {useCallback} from "react"

import ReactFullpage from '@fullpage/react-fullpage';

import Layout from "../components/layout"
import Contact from "../components/Contact"
// import { useState } from 'react';
// import { send } from 'emailjs-com';
import Seo from "../components/seo"
import "../components/fullpage.css";

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>


function IndexPage() {

  return (
  <Layout>
    
    <Seo title="Home" />
    <section className="py-5 text-center container">
        <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

          <div className="section">
            <div className="page">
            <p><b>Buckstarter helps get brands moving. We give businesses stronger points-of-view and bigger presences in the marketplace, so they become more effective. We deliver deep branding experience in a more efficient operating model we call a “branding studio” rather than an “advertising agency”.</b></p>
            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
            <button>
              Sizzle Reel
            </button>
            </div>
          </div>
          {/* Next page */}
          <div className="section">
            <div className="page">
              <h2>We organize around your needs.</h2>
              <div className="brandingimages">
                <figure>
                  <img src="../images/innovation.png" alt="Buckstarter innovation"></img>
                  <figcaption>Strategy, Design, Architecture, Purpose</figcaption>
                </figure>
                <figure>
                  <img src="../images/branding.png" alt="Buckstarter branding"></img>
                  <figcaption>Content production: digital, video, print, ultra-efficent</figcaption>
                </figure>
                <figure>
                  <img src="../images/production.png" alt="Buckstarter production"></img>
                  <figcaption>Brand narrative, advertising content</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="page">
              <h2>We operate as a "hive"</h2>
              <p>As a branding studio, we relentlessly focus on the end- product: the quality of the output. We cherry-pick the best designers, strategists, creative directors, media planners or buyers, producers, or directors needed to get the job done well. We "swarm" just the right talent around the brand. And we work fast, with little to no waste.</p>
            </div>
          </div>
          <div className="section">
            <div className="page">
              <div className="thework">
              <h2>The Work</h2>
              <p>Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:</p>
              </div>
              <h3>Simplicity, Clarity, Allure.</h3>
              <div className="clients">
                <div className="row">
                  <div className="col-sm">
                <img src="../images/bnc.jpeg" alt="Black News Channel"></img>
                  </div>
                  <div className="col-sm">
                <img src="../images/siggi.jpeg" alt="Siggi's"></img>
                  </div>
                  <div className="col-sm">
                <img src="../images/naturlich.png" alt="Naturlich yogurt"></img>
                  </div>
                </div>{/*end of row*/}
                <div className="row">
                  <div className="col-sm">
                <img src="../images/dagostino" alt="D'agostino Law PLLC"></img>
                </div>
                  <div className="col-sm">
                <img src="../images/upcycle.png" alt="upcycle"></img>
                </div>
                  <div className="col-sm">
                <img src="../images/internationalCopper.png" alt="International Copper"></img>
                </div>
                </div>{/*end of row*/}
                <div className="row">
                  <div className="col-sm">
                <img src="../images/miamiDadeCounty.jpeg" alt="Miami Dade County"></img>
                  </div>
                  <div className="col-sm">
                <img src="../images/crowdster.jpeg" alt="Crowdster"></img>
                  </div>
                  <div className="col-sm">
                <img src="../images/waterGarden.png" alt="Water Garden"></img>
                  </div>
                </div>{/*end of row*/}
              </div>{/*end of clients*/}
              <button>
                Case Studies
              </button>
            </div>{/*end of page*/}
          </div>{/*end of section*/}
          <div className="section">
          <div className="page">
            <div className="meet-scott">
              <h2>Meet Scott</h2>
              <img src="../images/scott.jpeg" alt="Scott"></img>
              <p>Founder of Bluckstarter LLC</p>
              <img src="../images/linkedin.png" alt="Linkedin"></img>
              </div>{/*end of meet-scott*/}
            </div>{/*end of page*/}
          </div>{/*end of section*/}
          <div className="section">
            <div className="page">
              <h2>Get in contact</h2>
              <p>Thanks for visiting. We'd love to hear from you. Better yet, we'd love to work with you. Use the form below and we will quickly get back to you. Let's get started!</p>
              <Contact />
            </div>
          </div>
          {/* <div className="section">
            <div className="page">
              <p>case studies</p>
            </div>
          </div>
          <div className="section">
            <div className="page">
              <p>client spotlight</p>
            </div>
          </div>
          <div className="section">
            <div className="page">
              <p>We are bluckstarter: sizzle reel</p>
            </div>
          </div> */}
        </ReactFullpage.Wrapper>
      );
    }}
  />
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
          <div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>

     
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
