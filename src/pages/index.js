import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"

import TopDivider from "../images/backgrounds/green_divider_top.png"
import BottomDivider from "../images/backgrounds/green_divider_bottom.png"

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
              <div className="belief__content">
                <div className="belief__title">We believe in books</div>
                <div className="belief__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet nibh. Neque vitae tempus quam pellentesque nec nam aliquam. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Lobortis scelerisque fermentum dui faucibus. Quisque egestas diam in arcu cursus euismod. Faucibus in ornare quam viverra orci sagittis eu volutpat. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in tellus integer feugiat. Tristique senectus et netus et malesuada fames.</div>
              </div>
              <div className="belief__image"></div>
            </div>
            
            <div className="belief__divider belief__divider--bottom">
              {/* <img src={} /> */}
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
      }
    }
  }
`

export default Homepage
