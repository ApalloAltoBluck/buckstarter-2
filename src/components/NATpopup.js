import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import "../components/PopUp.css";

const NATPopupWindow = () => {
  return (
    <ReactCircleModal
        backgroundColor="#FFF"
        toogleComponent={onClick => (
        <button onClick={onClick}>
          Case Study
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div id="popupWindow" >
            <button id="closeButton" onClick={onClick}>
            x
          </button>
          <div id="box">
              <div id="top">
              <StaticImage src="../images/naturlich.png" alt="Naturlich yogurt" className="clientLogo"  />              </div>
              <div id="bottom">
                  <h2 id="Name">Natūrlich</h2>
                  <p id="description">This is a short ish description of what BNC News is...</p>
              </div>
          </div>
          
        </div>
      )}
    </ReactCircleModal>
  )
}

export default NATPopupWindow