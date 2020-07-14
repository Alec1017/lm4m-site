import React, { useState } from "react"
import { getImageUrl } from "takeshape-routing"


const ProjectCard = ({ image, location, text }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project-card">
      <div className="project-card__content">
        <div className="project-card__image">
          <div className="project-card__location">
            <div className="project-card__location__text">
              {location}
            </div>
          </div>
          <img src={getImageUrl(image)} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard