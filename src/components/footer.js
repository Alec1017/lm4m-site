import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Inner from "../components/inner"
import Divider from "../components/divider"

import logoDark from "../images/logo_dark.png"
import logoLight from "../images/logo_light.png"
import Facebook from "../images/vectors/facebook.svg"
import Instagram from "../images/vectors/instagram.svg"
import LinkedIn from "../images/vectors/linkedin.svg"

const Footer = ({children, light, backgroundColor}) => {
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
    <footer className="footer">
      <Divider color={backgroundColor} type="top" />
      <div className={`footer__wrapper footer__wrapper--${backgroundColor}`}>
        <Inner className="footer__inner">
          {children}

          <Link to="/">
            <div className="footer__title">
              <div className={`footer__logo ${light === true ? 'footer__logo--visible' : ''}`}>
                <img src={logoLight} />
              </div>
              <div className={`footer__logo ${light !== true ? 'footer__logo--visible' : ''}`}>
                <img src={logoDark} />
              </div>
              <div className={`footer__text ${light === true ? 'footer__text--light' : 'footer__text--dark'}`}>
                {siteData.siteTitle}
              </div>
            </div>
          </Link>

          <ul className="footer__list">
            <li>
              <div className={`footer__link ${light === true ? 'footer__link--light' : 'footer__link--dark'}`}>
                <Link to="/work">Our Work</Link>
              </div>
            </li>
            <li>
              <div className={`footer__link ${light === true ? 'footer__link--light' : 'footer__link--dark'}`}>
                <Link to="/about">About Us</Link>
              </div>
            </li>
            <li>
              <div className={`footer__link ${light === true ? 'footer__link--light' : 'footer__link--dark'}`}>
                <Link to="/contact">Contact</Link>
              </div>
            </li>
            <li>
              <div className={`footer__link ${light === true ? 'footer__link--light' : 'footer__link--dark'}`}>
                <Link to="/donate">Donate</Link>
              </div>
            </li>
          </ul>

          <ul className="footer__social">
            <li>
              <div className="footer__social__link">
                <a>
                  <Facebook className={`${light === true ? 'footer__svg--light' : 'footer__svg--dark'}`} />
                </a>
              </div>
            </li>
            <li>
              <div className="footer__social__link">
                <a>
                  <Instagram className={`${light === true ? 'footer__svg--light' : 'footer__svg--dark'}`} />
                </a>
              </div>
            </li>
            <li>
              <div className="footer__social__link">
                <a>
                  <LinkedIn className={`${light === true ? 'footer__svg--light' : 'footer__svg--dark'}`} />
                </a>
              </div>
            </li>
          </ul>
          <div className={`footer__scout ${light === true ? 'footer__scout--light' : 'footer__scout--dark'}`}>
            Made with &lt;3 by <a href="https://web.northeastern.edu/scout/">Scout</a>
          </div>
        </Inner>
      </div>
    </footer>
  )
}

export default Footer