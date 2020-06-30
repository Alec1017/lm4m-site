import React from "react"


const Highlight = ({children, type}) => {
  return (
    <div className={`highlight ${type === 'yellow' ? 'highlight--yellow' : 'highlight--red'}`}>
      {children}
    </div>
  )
}

export default Highlight