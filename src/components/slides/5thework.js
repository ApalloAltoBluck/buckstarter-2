import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

import { useState } from 'react';
const Client = (props) => {
  return (
    <>
      <div onClick={() => {props.setClient(props.client); props.fullpageApi.moveSectionDown() }}className="w-32 m-3 h-32 bg-black"></div>
    </>
  )
}

const ClientPopup = (props) => {
  
  return (props.client && <div className="container">
    <div className="section" >
          <div id="bottom">
              <img src={props.client.image}/>
              <h2 id="Name">title: {props.client.title} </h2>
              <p id="description">{props.client.description}</p>
      </div>
    </div></div>)
    }



const TheWork = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [client, setClient] = useState(null);

    return (  <>
        <div className="section container">
            <div className="page Fourth">
              <div className="">
              <h2>The Work</h2>
              <p className="text-style-1">Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:</p>
              </div>
              <h3>Simplicity, Clarity, Allure.</h3>
              <div className="clients">
                <Client fullpageApi={props.fullpageApi} setClient={setClient} setIsOpen={setIsOpen} client={{title: "siggis", description: "I love Siggis Yogurt", image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fdenzel-curry-knotty-head-rick-ross-remix-000.jpg?w=960&cbr=1&q=90&fit=max"}}/>
                <Client fullpageApi={props.fullpageApi} setClient={setClient} setIsOpen={setIsOpen} client={{title: "DAG", description: "I love DAG", image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fdenzel-curry-knotty-head-rick-ross-remix-000.jpg?w=960&cbr=1&q=90&fit=max"}}/>

                  <figure>
                  <img src="../images/siggi.jpeg" alt="Siggi's"  className="clientLogo" />
                  </figure>
                  <figure>
                  <img src="../images/naturlich.png" alt="Naturlich yogurt" className="clientLogo"  />
                  </figure>
                  <figure>
                  <img src="../images/dagostino.jpeg" alt="D'agostino Law PLLC"  className="clientLogo" />
                  </figure>
              
              </div>{/*end of clients*/}
            </div>{/*end of page*/}
          </div>
          {client &&
          <ClientPopup setTriggered={setIsOpen} client={client}/>}
</>) }
export default TheWork