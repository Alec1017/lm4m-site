import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import logoLight from "../../images/logo_light.png"


const Header = ({ siteTitle }) => {
  const [toggled, setToggled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [prevScroll, setPrevScroll] = useState(0)

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

    return () => {
      window.removeEventListener('scroll', showHeader)
    }
  }, [])

  return (
    <header className={`header ${isScrolling ? 'scrolling' : ''}`}>
      <div className="header__inner">
        <Link to="/">
          <div className="header__title">
            <div className="header__logo">
              <img src={logoLight} />
            </div>
            <div className="header__text">{siteTitle}</div>
          </div>
        </Link>
        <div className={`header__hamburger ${toggled ? 'toggled-hamburger' : ''}`} onClick={() => setToggled(!toggled)}>
          <span className="header__hamburger__line"></span>
          <span className="header__hamburger__line"></span>
          <span className="header__hamburger__line"></span>
        </div>
        <ul className={`header__list ${toggled ? 'toggled-list' : ''}`}>
          <li>
            <div className="header__link">
              <Link to="/work">Our Work</Link>
            </div>
          </li>
          <li>
            <div className="header__link">
              <Link className="nav-item" to="/about">About Us</Link>
            </div>
          </li>
          <li>
            <div className="header__link">
              <Link className="nav-item" to="/contact">Contact</Link>
            </div>
          </li>
          <li>
            <div className="header__link">
              <Link className="nav-item" to="/donate">Donate</Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
