import React from "react"
import { Link } from "gatsby"

import Inner from "../components/inner"
import Divider from "../components/divider"

import logoDark from "../images/logo_dark.png"
import Facebook from "../images/vectors/facebook.svg"
import Instagram from "../images/vectors/instagram.svg"
import LinkedIn from "../images/vectors/linkedin.svg"

const Footer = ({siteTitle}) => (
  <footer className="footer">
    <Divider color="yellow" type="top" />
    <div className="footer__wrapper">
      <Inner className="footer__inner">

        <Link to="/">
          <div className="footer__title">
            <div className="footer__logo">
              <img src={logoDark} />
            </div>
            <div className="footer__text">{siteTitle}</div>
          </div>
        </Link>

        <ul className="footer__list">
          <li>
            <div className="footer__link">
              <Link to="/work">Our Work</Link>
            </div>
          </li>
          <li>
            <div className="footer__link">
              <Link to="/about">About Us</Link>
            </div>
          </li>
          <li>
            <div className="footer__link">
              <Link to="/contact">Contact</Link>
            </div>
          </li>
          <li>
            <div className="footer__link">
              <Link to="/donate">Donate</Link>
            </div>
          </li>
        </ul>

        <ul className="footer__social">
          <li>
            <div className="footer__social__link">
              <a>
                <img src={Facebook} />
              </a>
            </div>
          </li>
          <li>
            <div className="footer__social__link">
              <a>
                <img src={Instagram} />
              </a>
            </div>
          </li>
          <li>
            <div className="footer__social__link">
              <a>
                <img src={LinkedIn} />
              </a>
            </div>
          </li>
        </ul>
        <div className="footer__scout">
          Made with &lt;3 by <a href="https://web.northeastern.edu/scout/">Scout</a>
        </div>
      </Inner>
    </div>
  </footer>
)

export default Footer
