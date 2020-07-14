import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "takeshape-routing"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Divider from "../components/divider"
import Inner from "../components/inner"
import Footer from "../components/footer"
import Tooltip from "../components/tooltip"

import OrangeTab from "../images/labels/orange_sticky_tab.png"

const Homepage = ({ data, path }) => {
  const homepageData = data.takeshape.getHomepage
  const siteData = data.takeshape.getSiteSettings

  useEffect(() => {
    // Remove the tabindex attribute from each of the dots in the carousel
    const dots = document.getElementsByClassName("dot")
    for (const dot of dots) {
      dot.removeAttribute("tabindex")
    }

  }, [])

  return (
    <Layout path={path}>
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
                  <div className="belief__title" dangerouslySetInnerHTML={{ __html: homepageData.beliefSection.title.blocks[0].text }} />
                  {homepageData.beliefSection.text.blocks.map((value, index) => {
                      return <div className="belief__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                    })}
                  <a href={siteData.donateUrl}>
                    <div className="belief__donate">
                      Donate
                    </div>
                  </a>
                </div>
                <div className="belief__image__content">
                  <div className="belief__image__inner">
                    <div className="belief__sticker">
                      <img src={OrangeTab} />
                    </div>
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
                  <div className="map__title" dangerouslySetInnerHTML={{ __html: homepageData.mapSection.title.blocks[0].text }} />
                  <div className="map__subtitle" dangerouslySetInnerHTML={{ __html: homepageData.mapSection.subtitle.blocks[0].text }} />
                  <div className="map__image">
                    <div className="map__tooltips">
                      <Tooltip data="Nassau, Bahamas" top={48} left={26.3} />
                      <Tooltip data="Cape Town, South Africa" top={75} left={54.5} />
                      <Tooltip data="Thessaloniki, Greece" top={36} left={53.6} />
                      <Tooltip data="Kent, UK" top={28} left={45.5} />
                      <Tooltip data="Andhra Pradesh, India" top={48} left={70.25} />
                    </div>
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
              <div className="quote__content quote__carousel--mobile">
                {homepageData.quoteSection.quoteSlide[0].quote.blocks.map((value, index) => {
                  return <div className="quote__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                })}
                <div className="quote__source" dangerouslySetInnerHTML={{ __html: homepageData.quoteSection.quoteSlide[0].source.blocks[0].text }} />
              </div>
                <Carousel autoPlay infiniteLoop={true} interval={8000} showArrows={false} showStatus={false} showThumbs={false} className="quote__carousel">
                  {homepageData.quoteSection.quoteSlide.map((value, index) => {
                    return (
                      <div className="quote__content" key={index}>
                        {value.quote.blocks.map((value, index) => {
                          return <div className="quote__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                        })}
                        <div className="quote__source" dangerouslySetInnerHTML={{ __html: value.source.blocks[0].text }} />
                      </div>
                    )
                  })}
                </Carousel>
              </Inner>
            </div>
          </div>

          <div className="stories">
            <div className="stories__wrapper">
              <Divider color="blue" type="bottom" />
              <Inner>
                <div className="stories__content">
                  <div className="stories__text__wrapper">
                    <div className="stories__title" dangerouslySetInnerHTML={{ __html: homepageData.storiesSection.title.blocks[0].text }} />
                    {homepageData.storiesSection.text.blocks.map((value, index) => {
                      return <div className="stories__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
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
          text
          title
        }
        mapSection {
          title
          subtitle
          image {
            path
          }
        }
        quoteSection {
          quoteSlide {
            quote
            source
          }
        }
        storiesSection {
          title
          text
          image {
            path
          }
        }
      }
      getSiteSettings {
        donateUrl
      }
    }
  }
`

export default Homepage
