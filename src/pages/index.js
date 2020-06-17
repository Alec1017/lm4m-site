import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"

const Homepage = ({ data }) => {
  const homepageData = data.takeshape.getHomepage
  console.log(homepageData.hero.image.path)
  return (
    <Layout>
      <SEO title={homepageData.title} />
      <Hero
        tagline={homepageData.hero.heroText.blocks[0].text}
        imagePath={homepageData.hero.image.path}
      />
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
        }
      }
    }
  }
`

export default Homepage
