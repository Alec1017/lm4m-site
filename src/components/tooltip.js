import React, { useState } from "react"

const Tooltip = ({ data, top, left }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={`tooltip${isVisible ? ' tooltip--visible' : ''}`} style={{ top: `${top}%`, left: `${left}%` }}>
      <div className="tooltip__text">{data}</div>
      <div className="tooltip__trigger" onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)}></div>
    </div>
  )
}

export default Tooltip