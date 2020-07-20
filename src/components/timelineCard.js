import React from "react"

import Divider from "./divider"


const TimelineCard = ({title, text, orientation}) => {
  return (
    <div className="timeline-card">
      <div className="timeline-card__content">
        <div className="timeline-card__title">{title}</div>
        {text.blocks.map((value, index) => {
          return <div className="timeline-card__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
        })}
      </div>
      <div className="timeline-card__rip">
        <Divider color="green" type="top" />  
      </div>
    </div>
  )
}

export default TimelineCard