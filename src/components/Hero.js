import React from "react"
import { getImageUrl } from "takeshape-routing"

import Inner from "./inner"


const Hero = ({ tagline, imagePath }) => {
  return (
    <div className="hero">
      <div className="hero__background">
        <img src={getImageUrl(imagePath)} />
      </div>
      <Inner>
        <div className="hero__content"> 
          <div className="hero__title">{tagline}</div>
        </div>
      </Inner>
    </div>
  )
}

export default Hero
