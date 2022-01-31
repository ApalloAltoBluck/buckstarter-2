import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const TheWork = () => {
    return (  
        <div className="section container">
            <div className="page Fourth">
              <div className="">
              <h2>The Work</h2>
              <p className="text-style-1">Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:</p>
              </div>
              <h3>Simplicity, Clarity, Allure.</h3>
              <div className="clients">
                  <figure>
                    <img src="../images/bnc.jpeg" alt="Black News Channel"  className="clientLogo"   />
                  </figure>
                  <figure>
                  <img src="../images/siggi.jpeg" alt="Siggi's"  className="clientLogo" />
                  </figure>
                  <figure>
                  <img src="../images/naturlich.png" alt="Naturlich yogurt" className="clientLogo"  />
                  </figure>
                  <figure>
                  <img src="../images/dagostino.jpeg" alt="D'agostino Law PLLC"  className="clientLogo" />
                  </figure>
              {/* <PopupWindow /> */}
              </div>{/*end of clients*/}
            </div>{/*end of page*/}
          </div>) }
export default TheWork