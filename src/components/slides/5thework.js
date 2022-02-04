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
          <div className=" bg-gray-200 py-4 border border-black w-screen h-1/2" id="bottom">
                <div className="flex">{
                    props.image &&                   <GatsbyImage className="drop-shadow-2xl w-1/6 px-10 mx-auto" image={props.client.image}/>

                }
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
            <div className="page Fourth mt-20 -mx-10">
              <div className="">
              <h2 className='text-2xl md:text-4xl lg:text-6xl '>The Work</h2>
              <p className=" mx-14 mt-10 text-xl leading-loose md:mx-0 md:text-3xl md:leading-loose lg:text-2xl lg:leading-loose">Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles:</p>
              </div>
              <h3 className='mt-10 text-xl leading-loose md:text-3xl md:leading-loose lg:text-2xl lg:leading-loose'>Simplicity, Clarity, Allure.</h3>
              <div className="clients mr-10">
                <ClientList fullpageApi={props.fullpageApi} setClient={setClient} />              
              </div>{/*end of clients*/}
            </div>{/*end of page*/}
          </div>
          <ClientPopup client={client}/>
</>) }


