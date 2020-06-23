import React from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"

import GreenDivider from "../images/backgrounds/mobile/green_divider_top.png"
import OrangeTab from "../images/labels/orange_sticky_tab.png"

const Homepage = ({ data }) => {
  const homepageData = data.takeshape.getHomepage

  console.log(homepageData.beliefSection.beliefTitle.blocks[0].text)
  return (
    <Layout>
      <SEO title={homepageData.title} />
      <Hero
        tagline={homepageData.hero.heroText.blocks[0].text}
        imagePath={homepageData.hero.image.path}
      />
      <div className="homepage">
        <div className="homepage__inner">



          <div className="belief">
            <div className="belief__divider belief__divider--top">
              <img src={GreenDivider} />
            </div>
            <div className="belief__inner">
              <div className="belief__content">
                <div className="belief__title">{homepageData.beliefSection.beliefTitle.blocks[0].text}</div>
                <div className="belief__text">{homepageData.beliefSection.beliefText.blocks[0].text}</div>
              </div>

              <div className="belief__image__content">
                <img className="belief__sticker" src={OrangeTab} />
                <img className="belief__image" src={getImageUrl(homepageData.beliefSection.image.path)} />
              </div> 

            </div>
            
            <div className="belief__divider belief__divider--bottom">
              <img src={GreenDivider} />
            </div>
          </div>




          <div className="map">

          </div>
          <div className="quote">

          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    takeshape {
      getHomepage {
        _id
        title
        hero {
          heroText
          image {
            path
          }
        }
        beliefSection {
          image {
            _id
            caption
            credit
            description
            filename
            mimeType
            path
            sourceUrl
            title
            uploadStatus
          }
          beliefText
          beliefTitle
        }
      }
    }
  }
`

export default Homepage
