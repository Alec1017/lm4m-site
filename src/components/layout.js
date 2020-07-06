import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

import "../stylesheets/main.scss"

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query {
      takeshape {
        getSiteSettings {
          siteTitle
          facebookUrl
          instagramUrl
          linkedInUrl
          donateUrl
        }
      }
    }
  `)

  const siteData = data.takeshape.getSiteSettings
  return (
    <>
      <Header 
        path={path}
        siteTitle={siteData.siteTitle} 
        donateURL={siteData.donateUrl} 
        facebookURL={siteData.facebookUrl} 
        instagramURL={siteData.instagramUrl} 
        linkedInURL={siteData.linkedInUrl} 
      />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
