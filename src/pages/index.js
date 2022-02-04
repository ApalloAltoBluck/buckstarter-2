import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import Burger from "../components/burger"

import PopupWindow from '../components/PopUp.js';

import HomeSlide from  "../components/slides/1homeslide"
import AboutBS from "../components/slides/2aboutslide"
import Service from "../components/slides/3serviceslide"
import HiveSlide from "../components/slides/4hiveslide"
import TheWork from "../components/slides/5thework"
import AboutScott from "../components/slides/6aboutscott"
import ContactSlide from "../components/slides/7contactslide"

import ReactFullpage from '@fullpage/react-fullpage';



import Layout from "../components/layout"

import Seo from "../components/seo"
import "../components/fullpage.css";



const Header = (props) => {
  return (
    <div className="sticky z-30">
    {/* <img className="mx-auto w-1/5 md:w-1/12 z-10 " src={'/logo.jpg'}  /> */}
    <Burger fullpageApi={props.fullpageApi} right/>

    </div>

  )
}



function IndexPage(props) {

  const [firstPage, setFirstPage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [fullpageApi, setfullpageApi] = useState(null);

  const imageClick = () => {
    console.log('Click');
  } 

  return (
  <Layout>
    <Header className="z-10" isFirstPage={isOpen} fullpageApi={fullpageApi} ></Header>
    <Seo title="Buckstarter" />
    <section className=" text-center z-1">
        <ReactFullpage
    //fullpage options
    licenseKey = {'DE1AD8E3-6F4E43A9-B6863C59-E2BF978C'}
    navigation
    scrollOverflow
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <HomeSlide className="section" data-anchor="Home" />
          <AboutBS  className="section" fullpageApi={fullpageApi} />
          <Service  className="section"/>
          <HiveSlide className="section" />
          <TheWork className="section" fullpageApi={fullpageApi} data-anchor="TheWork"/>
          <AboutScott className="section" />
          <ContactSlide data-anchor="Contact" />
        

          
          {/* <div className="section">
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
          </div> */}
          
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
