import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="content">
      <Link className="logo-image">
        <h1>{siteTitle}</h1>
      </Link>
      <ul className="nav">
        <Link className="nav-item" to="/work">
          Our Work
        </Link>
        <Link className="nav-item" to="/about">
          About Us
        </Link>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
        <Link className="nav-item" to="/donate">
          Donate
        </Link>
      </ul>
    </div>
  </header>
)

export default Header
