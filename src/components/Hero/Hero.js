import React from "react"
import { getImageUrl } from "takeshape-routing"


const Hero = ({ tagline, imagePath }) => {
  return (
    <div className="hero">
      <div className="hero__background">
        <img src={getImageUrl(imagePath)} />
      </div>
      <div className="hero__content"> 
        <div className="hero__title">{tagline}</div>
      </div>
    </div>
  )
}

export default Hero
