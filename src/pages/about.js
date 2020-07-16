import React from "react"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"
import Footer from "../components/footer"
import Divider from "../components/divider"

const AboutPage = ({ data, path }) => {
  const aboutDataIntro = data.takeshape.getAbout.introductionSection

  return (
    <Layout path={path}>
      <SEO title="About" />
      
      <div className="introduction">
        <div className="introduction__wrapper">
          <Inner>
            <div className="introduction__content">
              <div className="introduction__intro">
                <div className="introduction__intro__title" dangerouslySetInnerHTML={{ __html: aboutDataIntro.introduction.title.blocks[0].text }} />
                {aboutDataIntro.introduction.text.blocks.map((value, index) => {
                  return <div className="introduction__intro__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                })}
                <div className="introduction__intro__image">
                  <img src={getImageUrl(aboutDataIntro.introduction.image.path)} alt=""/>
                </div>
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
      getAbout {
        introductionSection {
          introduction {
            image {
              path
            }
            text
            title
          }
          values {
            icons {
              image {
                path
              }
            }
            image {
              path
            }
            text
            title
          }
          vision {
            image {
              path
            }
            text
            title
          }
          workTogether {
            image {
              path
            }
            text
            title
          }
        }
      }
    }
  }
`

export default AboutPage
