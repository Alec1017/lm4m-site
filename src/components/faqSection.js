import React, { useState } from "react"

const FAQSection = ({question, answer, lastFAQ}) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="faq-section">
      <div className={`faq-section__inner${lastFAQ ? ' faq-section__inner--last' : ''}`}>
        <div className="faq-section__question" onClick={() => setIsOpen(!isOpen)}>
          <div className="faq-section__title">{question}</div>
          <div className="faq-section__button__content">
            {!isOpen && <div className="faq-section__button">+</div>}
            {isOpen && <div className="faq-section__button">-</div>}
          </div>

        </div>
        <div className={`faq-section__answer${isOpen ? ' is-open' : ''}`}>
          {answer.blocks.map((value, index) => {
            return <div className="faq-section__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQSection