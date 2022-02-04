import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, A11y, FreeMode } from 'swiper';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ClientList = (props) => {
  const data = useStaticQuery(graphql`
  {
    allGraphCmsClient {
      edges {
        node {
          iconPhoto {
            gatsbyImageData
          }
          description
          gallery {
            gatsbyImageData
          }
          clientName
        }
      }
    }
  }
`)

  return(         <>  <h1 className="header-portion pt-8"><b>Case Studies</b></h1>
    <div  className="flex flex-row">

    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      className="w-screen mx-auto"
      modules={[Navigation, Pagination, A11y, FreeMode]}
      spaceBetween={50}
      freeMode
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      initialSlide={1}
      autoPlay
      breakpoints= {{
        // when window width is >= 320px
        320: {
          slidesPerView: 'auto',
          navigation:false,
          freeMode:true,
          spaceBetween: 0        
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
          freeMode:false,
          
        }
      }}
    >
      <SwiperSlide>
      <h1 className="text-2xl">Sizzle Reel</h1>
      <div onClick={() => {props.setClient(null); props.fullpageApi.moveSectionDown();}} className=" my-auto hover:cursor-grab"  >
        <img className="w-32 h-full object-fill mx-auto pt-3 mb-14 lg:mb-20 lg:pt-3" src={'logo.jpg'} />
</div>

      </SwiperSlide>
  {data.allGraphCmsClient.edges.map((client, index) => (<div className=" mx-auto my-10 lg:my-22">
        <SwiperSlide>
        <h1 className="text-2xl">{client.node.clientName}</h1>
        <div className=" hover:cursor-grab"  >
        <GatsbyImage onClick={() => {props.setClient({title: client.node.clientName, description: client.node.description, image: client.node.iconPhoto.gatsbyImageData, gallery: client.node.gallery}); props.fullpageApi.moveSectionDown();}} className="w-32 object-fill" image={client.node.iconPhoto.gatsbyImageData} />
        </div>
        </SwiperSlide>

        </div>
    ))} 
        </Swiper>

</div></> )
}

export default ClientList