import React, { useState } from "react"
import { Link } from "gatsby"

import logoLight from "../../images/logo_light.png"


const Header = ({ siteTitle }) => {
  const [toggled, setToggled] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Link>
          <div className="header__title">
            <div className="header__logo">
              <img src={logoLight} />
            </div>
            <div className="header__text">
              <h1>{siteTitle}</h1>
            </div>
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
