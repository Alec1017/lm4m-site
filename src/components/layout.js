/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

import "../stylesheets/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      takeshape {
        getSiteSettings {
          siteTitle
        }
      }
    }
  `)

  const siteData = data.takeshape.getSiteSettings
  return (
    <>
      <Header siteTitle={siteData.siteTitle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
