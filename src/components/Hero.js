import React from "react"
import { getImageUrl } from "takeshape-routing"

import Inner from "./inner"
import Highlight from "./highlight"


const Hero = ({ tagline, imagePath }) => {
  return (
    <div className="hero">
      <div className="hero__background">
        <img src={getImageUrl(imagePath)} />
      </div>
      <Inner>
        <div className="hero__content"> 
          <div className="hero__title">
            {tagline.split(' ').slice(0, -1).join(' ')}
            &nbsp;
            <Highlight type="red">
              {tagline.split(' ').slice(-1)[0]}
            </Highlight>
          </div>
        </div>
      </Inner>
    </div>
  )
}

export default Hero
