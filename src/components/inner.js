import React from "react"

const Inner = ({ children, className }) => {

  return (
    <div className={`inner ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default Inner