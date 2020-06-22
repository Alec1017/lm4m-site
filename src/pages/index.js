import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"

import TopDivider from "../images/backgrounds/mobile/green_divider_top.png"

const Homepage = ({ data }) => {
  const homepageData = data.takeshape.getHomepage
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
              <img src={TopDivider} />
            </div>
            <div className="belief__inner">
              {/* <div className="belief__content">
                <div className="belief__title">{homepageData.beliefSection.title.blocks[0].text}</div>
                <div className="belief__text" dangerouslySetInnerHTML={{ __html: homepageData.beliefSection.textHtml }} />
              </div>
              <div className="belief__image">
                <img src={homepageData.beliefSection.image.path} />
              </div> */}
            </div>
            
            <div className="belief__divider belief__divider--bottom">
              <img src={TopDivider} />
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
          textHtml
          title
        }
      }
    }
  }
`

export default Homepage
