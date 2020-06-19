import React, { useState } from "react"
import { Link } from "gatsby"

import Hamburger from './hamburger'


const Header = ({ siteTitle }) => {
  const [toggled, setToggled] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link><h1>{siteTitle}</h1></Link>
        </div>
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
