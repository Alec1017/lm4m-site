import React from "react"
import { getImageUrl } from "takeshape-routing"

import Divider from "./divider"
import RedLabelRounded from "../images/labels/red_label_rounded.png"
import OrangeStickyTab from "../images/labels/orange_sticky_tab.png"


const TimelineCard = ({title, text, orientation, stickerType, image}) => {

  return (
    <div className={`timeline-card timeline-card--${orientation}`}>
      <div className="timeline-card__content">
        <div className="timeline-card__title">{title}</div>
        {text.blocks.map((value, index) => {
          return <div className="timeline-card__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
        })}
      </div>
      <Divider color="green" type={orientation} />
      {stickerType === 'red' && !image && 
        <div className="timeline-card__sticker timeline-card__sticker--red">
          <img src={RedLabelRounded} />
        </div>
      }
      {stickerType === 'orange' && !image &&
        <div className="timeline-card__sticker timeline-card__sticker--orange">
          <img src={OrangeStickyTab} />
        </div>
      }
      {image && 
        <div className="timeline-card__image">
          <img src={getImageUrl(image.path)} />
        </div>
      }
    </div>
  )
}

export default TimelineCard