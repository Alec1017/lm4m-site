import React, { useState } from "react"
import { getImageUrl } from "takeshape-routing"


const ProjectCard = ({ image, location, text }) => {
  const [isOpen, setIsOpen] = useState(false)

  // const noScroll = () => {
  //   window.scrollTo(0, 0);
  // }

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflowY = "hidden"
    // window.addEventListener('scroll', noScroll)
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflowY = "initial"
    // window.removeEventListener('scroll', noScroll)
  }

  return (
    <div className="project-card">
      <div className="project-card__content">
        <div className="project-card__image" onClick={() => openModal()}>
          <div className="project-card__location">
            <div className="project-card__location__text">
              {location}
            </div>
          </div>
          <img src={getImageUrl(image)} />
        </div>
      </div>

      <div className={`project-card__modal${isOpen ? ' project-modal-open' : ''}`}>
        <div className="project-card__modal__content">
          <div className="project-card__hamburger" onClick={() => closeModal()}>
            <span className="project-card__hamburger__line"></span>
            <span className="project-card__hamburger__line"></span>
          </div>
          <div className="project-card__modal__title">{location}</div>
          {text.map((value, index) => {
            return <div className="project-card__modal__text" key={index}>{value.text}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard