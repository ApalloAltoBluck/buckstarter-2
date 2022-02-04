import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';

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
  return(         <>  <h1 className="text-2xl md:text-3xl mt-10 lg:text-4xl">Case Studies</h1>
    <div  className="flex flex-row">

    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
  {data.allGraphCmsClient.edges.map((client, index) => (<div className=" mx-auto my-10">
        <SwiperSlide>
        <h1 className="text-2xl">{client.node.clientName}</h1>
        <div className="hover:shadow-xl hover:cursor-grab"  >
        <GatsbyImage onClick={() => {props.setClient({title: client.node.clientName, description: client.node.description, image: client.node.iconPhoto.gatsbyImageData, gallery: client.node.gallery}); props.fullpageApi.moveSectionDown();}} className="w-32 object-fill" image={client.node.iconPhoto.gatsbyImageData} />
        </div>
        </SwiperSlide>

        </div>
    ))}
        </Swiper>

</div></> )
}

export default ClientList