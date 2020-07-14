import React from "react"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"

const WorkPage = ({ data, path }) => {
  const workData = data.takeshape.getOurWork

  return (
    <Layout path={path}>
      <SEO title="Work" />
      
      <div className="our-work">
        <div className="our-work__wrapper">
          <Inner>
            <div className="our-work__content">
              <div className="our-work__title" dangerouslySetInnerHTML={{ __html: workData.ourWorkSection.title.blocks[0].text }} />
              <div className="our-work__subtitle" dangerouslySetInnerHTML={{ __html: workData.ourWorkSection.subtitle.blocks[0].text }} />
              <div className="our-work__locations">
                {workData.ourWorkSection.location.map((value, index) => {
                  return (
                    <div className="our-work__location" key={index}>
                      <div className="our-work__image">
                        <img src={getImageUrl(value.image.path)} />
                      </div>
                      <div className="our-work__location__title" dangerouslySetInnerHTML={{ __html: value.title.blocks[0].text }} />
                      {value.text.blocks.map((value, index) => {
                        return <div className="our-work__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </Inner>
        </div>
      </div>


    </Layout>
  )
}

export const query = graphql`
  query {
    takeshape {
      getOurWork {
        ourWorkSection {
          title
          abbreviatedTitle
          subtitle
          location {
            title
            text
            image {
              path
            }
          }
        }
      }
    }
  }
`

export default WorkPage
