import React from "react"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"
import Footer from "../components/footer"
import TimelineCard from "../components/timelineCard"
import Divider from "../components/divider"
import RedLabel from "../images/labels/red_label_2.png"
import YellowLabel from "../images/labels/yellow_label.png"

const AboutPage = ({ data, path }) => {
  const aboutDataIntro = data.takeshape.getAbout.introductionSection
  const aboutDataTimeline = data.takeshape.getAbout.timelineSection

  return (
    <Layout path={path}>
      <SEO title="About" />
      
      <div className="introduction">
        <div className="introduction__wrapper">
          <Inner>
            <div className="introduction__content">

              <div className="introduction__section introduction__section--intro">
                <div className="introduction__title" dangerouslySetInnerHTML={{ __html: aboutDataIntro.introduction.title.blocks[0].text }} />
                {aboutDataIntro.introduction.text.blocks.map((value, index) => {
                  return <div className="introduction__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                })}
                <div className="introduction__image__content introduction__image__content--right">
                  <div className="introduction__sticker introduction__sticker--red">
                    <img src={RedLabel} />
                  </div>
                  <div className="introduction__image">
                    <img src={getImageUrl(aboutDataIntro.introduction.image.path)} alt=""/>
                  </div>
                </div>
              </div>

              <div className="introduction__section introduction__section--vision">
                <div className="introduction__title" dangerouslySetInnerHTML={{ __html: aboutDataIntro.vision.title.blocks[0].text }} />
                {aboutDataIntro.vision.text.blocks.map((value, index) => {
                  return <div className="introduction__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                })}
                <div className="introduction__image__content introduction__image__content--left">
                  <div className="introduction__image">
                    <img src={getImageUrl(aboutDataIntro.vision.image.path)} alt=""/>
                  </div>
                </div>
              </div>

              <div className="introduction__section introduction__section--values">
                <div className="introduction__image__content introduction__image__content--right introduction__image__content--yellow">
                  <div className="introduction__sticker introduction__sticker--yellow">
                    <img src={YellowLabel} />
                  </div>
                  <div className="introduction__image">
                    <img src={getImageUrl(aboutDataIntro.values.image.path)} alt=""/>
                  </div>
                </div>

                <div className="introduction__title" dangerouslySetInnerHTML={{ __html: aboutDataIntro.values.title.blocks[0].text }} />
                {aboutDataIntro.values.text.blocks.map((value, index) => {
                  return <div className="introduction__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                })}

                <div className="introduction__icons">
                  {aboutDataIntro.values.icons.map((value, index) => {
                    return (
                      <div className="introduction__icon" key={index}>
                        <img src={getImageUrl(value.image.path)} />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="introduction__section introduction__section--work-together">
                <div className="introduction__title" dangerouslySetInnerHTML={{ __html: aboutDataIntro.workTogether.title.blocks[0].text }} />
                {aboutDataIntro.workTogether.text.blocks.map((value, index) => {
                  return <div className="introduction__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                })}
                <div className="introduction__image__content introduction__image__content--left">
                  <div className="introduction__image">
                    <img src={getImageUrl(aboutDataIntro.workTogether.image.path)} alt=""/>
                  </div>
                </div>
                <a href={`mailto:${aboutDataIntro.workTogether.email}`}>
                  <div className="introduction__button">
                    Contact
                  </div>
                </a>
              </div>

            </div>
          </Inner>
          <div className="divider__position__wrap" style={{position: 'relative'}}> 
            <Divider color="green" type="top" />
          </div>
        </div>
      </div>

      <Footer light backgroundColor="green">
        <div className="timeline">
          <div className="timeline__content">
            <div className="timeline__title" dangerouslySetInnerHTML={{ __html: aboutDataTimeline.title.blocks[0].text }} />
            <div className="timeline__cards">
              {aboutDataTimeline.card.map((value, index) => {
                return <TimelineCard key={index} title={value.title} text={value.text} /> 
              })}
            </div>
          </div>
        </div>
      </Footer>

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
        timelineSection {
          card {
            text
            title
          }
          title
        }
      }
    }
  }
`

export default AboutPage
