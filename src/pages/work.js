import React from "react"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"
import Divider from "../components/divider"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"


const WorkPage = ({ data, path }) => {
  const workData = data.takeshape.getOurWork

  return (
    <Layout path={path}>
      <SEO title="Work" />
      
      <div className="our-work">
        <div className="our-work__wrapper">
          <Inner>
            <div className="our-work__content">
              <div className="our-work__title our-work__title--full" dangerouslySetInnerHTML={{ __html: workData.ourWorkSection.title.blocks[0].text }} />
              <div className="our-work__title our-work__title--abbreviated" dangerouslySetInnerHTML={{ __html: workData.ourWorkSection.abbreviatedTitle.blocks[0].text }} />
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

      <div className="stats">
        <div className="stats__wrapper">
          <Divider color="green" type="bottom" />
          <Inner>
            <div className="stats__content">
              {workData.statsSection.stat.map((value, index) => {
                return (
                  <div className="stats__stat" key={index}>
                    <div className="stats__image">
                      <img src={getImageUrl(value.image.path)} />
                    </div>
                    <div className="stats__value">{value.value}</div>
                    <div className="stats__label">{value.label}</div>
                  </div>
                )
              })}
            </div>
          </Inner>
          <Divider color="blue" type="top" />
        </div>
      </div>

      <Footer light backgroundColor="blue">
        <div className="projects">
          <div className="projects__content">
            <div className="projects__title" dangerouslySetInnerHTML={{ __html: workData.moreProjectsSection.title.blocks[0].text }} />
            {workData.moreProjectsSection.projects.map((value, index) => {
              return <ProjectCard location={value.location} text={value.text.blocks} image={value.image.path} key={index} />
            })}
          </div>
        </div>
      </Footer>

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
        statsSection {
          stat {
            label
            value
            image {
              path
            }
          }
        }
        moreProjectsSection {
          title
          projects {
            location
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
