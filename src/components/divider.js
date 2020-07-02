import React from "react"
import PropTypes from "prop-types"

const Divider = ({color, type}) => {
  return (
    <div className={`divider ${type === 'top' ? 'divider__top' : 'divider__bottom'}`}>
      <img src={require(`../images/backgrounds/${color}_divider_${type}.png`)} />
    </div>
  )
}

Divider.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string
}

export default Divider