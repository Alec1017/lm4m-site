import React from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "takeshape-routing"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Divider from "../components/divider"
import Inner from "../components/inner"
import Highlight from "../components/highlight"
import Footer from "../components/footer"

import OrangeTab from "../images/labels/orange_sticky_tab.png"

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
            <div className="belief__wrapper">
              <Inner className="belief__inner">
                <div className="belief__content">
                  <div className="belief__title">{homepageData.beliefSection.beliefTitle.blocks[0].text}</div>
                  <div className="belief__text">{homepageData.beliefSection.beliefText.blocks[0].text}</div>
                  <a href="">
                    <div className="belief__donate">
                      Donate
                    </div>
                  </a>
                </div>
                <div className="belief__image__content">
                  <div className="belief__image__inner">
                    <img className="belief__sticker" src={OrangeTab} />
                    <img className="belief__image" src={getImageUrl(homepageData.beliefSection.image.path)} />
                  </div>
                </div> 
              </Inner>
            </div>
          </div>

          <div className="map">
            <div className="map__wrapper">
            <Divider color="green" type="bottom" />
              <Inner>
                <div className="map__content">
                  <div className="map__title">
                    {homepageData.mapSection.title.blocks[0].text.split(' ').slice(0, -1).join(' ')}
                    &nbsp;
                    <Highlight type="yellow">
                      {homepageData.mapSection.title.blocks[0].text.split(' ').slice(-1)[0]}
                    </Highlight>
                  </div>
                  <div className="map__subtitle">See the rest of <Link to="/work">Our Work</Link></div>
                  <div className="map__image">
                    <img src={getImageUrl(homepageData.mapSection.image.path)} />
                  </div>
                </div>
              </Inner>
              <Divider color="blue" type="top" />
            </div>
          </div>

          <div className="quote">
            <div className="quote__wrapper">
              <Inner>
                <div className="quote__content">
                  <div className="quote__text">{homepageData.quoteSection.quote.blocks[0].text}</div>
                  <div className="quote__source">{homepageData.quoteSection.source}</div>
                </div>
              </Inner>
            </div>
          </div>

          <div className="stories">
            <div className="stories__wrapper">
              <Divider color="blue" type="bottom" />
              <Inner>
                <div className="stories__content">
                  <div className="stories__text__wrapper">
                    <div className="stories__title">
                      {homepageData.storiesSection.title.split(' ').slice(0, -1).join(' ')}
                      &nbsp;
                      <Highlight type="yellow">
                        {homepageData.storiesSection.title.split(' ').slice(-1)[0]}
                      </Highlight>
                    </div>
                    {homepageData.storiesSection.text.blocks.map((value, index) => {
                      return <div className="stories__text" key={index}>{value.text}</div>
                    })}
                  </div>
                  <div className="stories__image">
                    <img src={getImageUrl(homepageData.storiesSection.image.path)} />
                  </div>
                </div>
              </Inner>
              <Divider color="yellow" type="top" />
            </div>
          </div>

          <Footer backgroundColor="yellow" />

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
            path
          }
          beliefText
          beliefTitle
        }
        mapSection {
          title
          image {
            path
          }
        }
        quoteSection {
          quote
          source
        }
        storiesSection {
          title
          text
          image {
            path
          }
        }
      }
    }
  }
`

export default Homepage
