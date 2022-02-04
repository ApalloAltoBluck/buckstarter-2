import React from 'react'
import { graphql } from "gatsby"
import { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import ClientList from "../clientlist"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';

const Client = (props) => {
  return (
    <>
      <div onClick={() => {props.setClient(props.client); props.fullpageApi.moveSectionDown();}}className="w-32 m-3 h-32 bg-black"></div>
    </>
  )
}


const ClientPopup = (props) => {
  
  if (!props.client) {
    return (
    <div className="section">
    <div className="h-screen" >
          <div className=" bg-gray-200 py-4 border border-black w-screen h-1/2" id="bottom">
                <div className="flex"><iframe className="mx-auto shadow-xl" src="https://player.vimeo.com/video/445284854?h=03b8158984" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
                </div>
                <div className="h-2/4 container mt-5">
                <h2 id="Name" className='text-center'>We are Buckstarter (sizzle reel)</h2>
                <p id="description" className='body-portion'> Our sizzle reel explores just what it means to be a nimble studio in the time of decreased attention spans. The reel spans just a few project the Buckstarter Hive was involved in across our nearly four decades of experience. </p>
              </div>
                </div>
                </div>)

  }
  
  return (props.client && <div className="section">
    <div className="h-screen" >
          <div className=" bg-gray-200 py-4 border border-black w-screen h-1/3" id="bottom">
                <div className="flex">
                <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
  {props.client.gallery && props.client.gallery.map((client, index) => (<div className=" mx-auto my-10">
        <SwiperSlide>
        <GatsbyImage imgStyle={{objectFit: 'contain'}} className="w-3/4 sm:w-1/2 md:w-1/5"  image={client.gatsbyImageData} />
        </SwiperSlide>

        </div>
    ))}
        </Swiper>
        {
                    props.image && <GatsbyImage className="drop-shadow-2xl w-1/6 px-10 mx-auto" image={props.client.image}/>
                }
                </div>
              </div>
              <div className="h-2/4 container mt-5">
                <h2 id="Name" className='text-center'>{props.client.title} </h2>
                <p id="description" className='text-sm leading-loose md:text-3xl md:leading-loose lg:text-2xl lg:leading-loose'>{props.client.description}</p>
              </div>
    </div></div>)
    }



export default function TheWork (props)  {
  const [client, setClient] = useState(null);

    return (  <>
        <div className="section ">
          <div className="flex table-cell my-auto align-middle ">
            <div className="page Fourth ">
              <h2 className="header-portion">The Work</h2>
              <p className="body-portion">Why should a brand exist? What purpose does it serve? Where is its heat? This is a craft of careful identification and distillation. Our work shares three common principles: <b>Simplicity, Clarity, Allure.</b></p>
              <div className="clients ">
                <ClientList fullpageApi={props.fullpageApi} setClient={setClient} />              
              </div>{/*end of clients*/}
            </div>{/*end of page*/}
          </div>
          </div>
          <ClientPopup client={client}/>
</>) }


