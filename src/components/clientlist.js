import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
  return(<div  className="flex flex-row">
  {data.allGraphCmsClient.edges.map((client, index) => (<div className=" mx-auto my-10">
        <h1 className="text-2xl">{client.node.clientName}</h1>
        <div className="hover:shadow-xl"  >
        <GatsbyImage onClick={() => {props.setClient({title: client.node.clientName, description: client.node.description, image: client.node.iconPhoto.gatsbyImageData }); props.fullpageApi.moveSectionDown();}} className="w-32 object-fill" image={client.node.iconPhoto.gatsbyImageData} />
        </div>
        </div>
    ))}
</div>)
}

export default ClientList