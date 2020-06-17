import React from "react"
import { getImageUrl } from "takeshape-routing"

import {
  HeroContainer,
  HeroTextContainer,
  HeroTagline,
  HeroImageContainer,
} from "./HeroStyles"

const Hero = ({ tagline, imagePath }) => (
  <HeroContainer>
    {/* <img src={getImageUrl(imageSrc)} /> */}
    <HeroImageContainer ImgSrc={getImageUrl(imagePath)} />
    <HeroTextContainer>
      <HeroTagline>{tagline}</HeroTagline>
    </HeroTextContainer>
  </HeroContainer>
)

export default Hero
