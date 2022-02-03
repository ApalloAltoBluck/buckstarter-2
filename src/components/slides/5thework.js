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
    <div className="h-screen" >
          <div className=" bg-gray-200 py-4 border border-black w-screen " id="bottom">
                <div className="flex">
                  <GatsbyImage className="drop-shadow-2xl px-10 mx-auto" image={props.client.image}/>
                </div>
              </div>
              <div className="h-2/4 container mt-5">
                <h2 id="Name" className='text-center'>{props.client.title} </h2>
                <p id="description" className='text-xl leading-loose md:text-3xl md:leading-loose lg:text-xl lg:leading-loose'>{props.client.description}</p>
              </div>
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


