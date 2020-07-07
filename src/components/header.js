import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import logoLight from "../images/logo_light.png"
import logoDark from "../images/logo_dark.png"
import Facebook from "../images/vectors/facebook.svg"
import Instagram from "../images/vectors/instagram.svg"
import LinkedIn from "../images/vectors/linkedin.svg"
import Inner from "./inner"

const lightRoutes = ['/', '/work/']

const Header = ({ path, siteTitle, facebookURL, instagramURL, linkedInURL, donateURL }) => {
  const [toggled, setToggled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [prevScroll, setPrevScroll] = useState(0)
  const [toggleLight, setToggleLight] = useState(true)
  

  const showHeader = () => {
    if (window.scrollY > prevScroll) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }

    setPrevScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', showHeader)

    if (lightRoutes.includes(path)) {
      setToggleLight(true)
    } else {
      setToggleLight(false)
    }

    return () => {
      window.removeEventListener('scroll', showHeader)
    }
  }, [])

  return (
    <header className={`header${isScrolling ? ' scrolling' : ''}${toggleLight ? ' light-routes': ' dark-routes'}`}>
      <div className="header__wrapper">
        <Inner className="header__inner">
          <Link to="/">
            <div className="header__title">
              <div className={`header__logo${toggleLight || isScrolling ? ' header__logo--visible' : ''}`}>
                <img src={logoLight} />
              </div>
              <div className={`header__logo${!toggleLight && !isScrolling ? ' header__logo--visible' : ''}`}>
                <img src={logoDark} />
              </div>
              <div className={`header__text${toggleLight ? ' header__text--light' : ' header__text--dark'}`}>{siteTitle}</div>
            </div>
          </Link>
          <div className={`header__hamburger ${toggled ? 'toggled-hamburger' : ''}`} onClick={() => setToggled(!toggled)}>
            <span className={`header__hamburger__line${toggleLight ? ' header__hamburger__line--light' : ' header__hamburger__line--dark'}`}></span>
            <span className={`header__hamburger__line${toggleLight ? ' header__hamburger__line--light' : ' header__hamburger__line--dark'}`}></span>
            <span className={`header__hamburger__line${toggleLight ? ' header__hamburger__line--light' : ' header__hamburger__line--dark'}`}></span>
          </div>
          <ul className={`header__list ${toggled ? 'toggled-list' : ''}`}>
            <li>
              <div className="header__link">
                <Link activeClassName="active-link" to="/work">Our Work</Link>
              </div>
            </li>
            <li>
              <div className="header__link">
                <Link activeClassName="active-link" to="/about">About Us</Link>
              </div>
            </li>
            <li>
              <div className="header__link">
                <Link activeClassName="active-link" to="/contact">Contact</Link>
              </div>
            </li>
            <li>
              <div className="header__link">
                <a href={donateURL}>
                  <div className={`header__donate${toggleLight || isScrolling ? ' header__donate--light' : ' header__donate--dark'}`}>Donate</div>
                </a>
              </div>
            </li>
            <div className="header__social">
              <div className="header__social__link">
                <a href={facebookURL}>
                  <Facebook />
                </a>
              </div>
              <div className="header__social__link">
                <a href={instagramURL}>
                  <Instagram />
                </a>
              </div>
              <div className="header__social__link">
                <a href={linkedInURL}>
                  <LinkedIn />
                </a>
              </div>
            </div>
          </ul>
        </Inner>
      </div>
    </header>
  )
}

export default Header
