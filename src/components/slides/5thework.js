import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { graphql } from "gatsby"
import { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import ClientList from "../clientlist"

const Client = (props) => {
  return (
    <>
      <div onClick={() => {props.setClient(props.client); props.fullpageApi.moveSectionDown();}}className="w-32 m-3 h-32 bg-black"></div>
    </>
  )
}


const ClientPopup = (props) => {
  
  return (props.client && <div className="section">
    <div className="" >
          <div className="bg-gray-300 w-screen left-0 h-1/2 p-10" id="bottom">
              <GatsbyImage className="mx-auto h-44 md:w-2/5 shadow-xl" image={props.client.image}/>
              </div>
              <h2 id="Name">{props.client.title} </h2>
              <p id="description">{props.client.description}</p>
    </div></div>)
    }



export default function TheWork (props)  {
  const [client, setClient] = useState({title: "Buckstarter: Sizzle Reel", description: "I love Siggis Yogurt", image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fdenzel-curry-knotty-head-rick-ross-remix-000.jpg?w=960&cbr=1&q=90&fit=max"});

    return (  <>
        <div className="section container">
            <div className="page Fourth">
              <div className="">
              <h2>The Work</h2>
              <p className="text-style-1">Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:</p>
              </div>
              <h3>Simplicity, Clarity, Allure.</h3>
              <div className="clients">
                <ClientList fullpageApi={props.fullpageApi} setClient={setClient} />
                

                 
              
              </div>{/*end of clients*/}
            </div>{/*end of page*/}
          </div>
          <ClientPopup client={client}/>
</>) }


