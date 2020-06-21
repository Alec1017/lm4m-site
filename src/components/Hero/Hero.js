import React from "react"
import { getImageUrl } from "takeshape-routing"

import {
  HeroContainer,
  HeroTextContainer,
  HeroTagline,
  HeroImageContainer,
} from "./HeroStyles"

const Hero = ({ tagline, imagePath }) => {
  // <HeroContainer>
  //   {/* <img src={getImageUrl(imageSrc)} /> */}
  //   <HeroImageContainer ImgSrc={getImageUrl(imagePath)} />
  //   <HeroTextContainer>
  //     <HeroTagline>{tagline}</HeroTagline>
  //   </HeroTextContainer>
  // </HeroContainer>
  return (
    <div className="hero">
      <div class="hero__background">
        <img src={getImageUrl(imagePath)} />
      </div>
      <div className="hero__content"> 
        <div className="hero__title">{tagline}</div>
      </div>
    </div>
  )
}

export default Hero
