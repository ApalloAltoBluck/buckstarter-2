import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import Burger from "../components/burger"


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
    {/* <Burger fullpageApi={props.fullpageApi} right/> */}

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
