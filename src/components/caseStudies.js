import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/bnc.jpeg"
import { StaticImage } from "gatsby-plugin-image"

const CaseStudy = ({ path , title, about }) => {
  return (
      <>
        <div id="outter-box">
            <div id="top">
                <img src={path} />
            </div>
            <div id="bottom">
                <h2>{title}</h2>
                <p>{about}</p>
            </div>
        </div>
      </>
  )
}

export default CaseStudy
