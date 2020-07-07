import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"

const ContactPage = ({ data, path }) => (
  <Layout path={path}>
    <SEO title="Contact" />
    <div className="contact">
      <div className="contact__inner">

        <div className="get-in-touch">
          <div className="get-in-touch__wrapper">
            <Inner>
              <div className="get-in-touch__content">
                <div className="get-in-touch__title">Get In Touch.</div>
                <div className="get-in-touch__text">Check out our FAQs to see if your question is already answered</div>
                <div className="get-in-touch__button">Contact</div>
              </div>
            </Inner>
          </div>
        </div>

        <div className="work-together">
          <div className="work-together__wrapper">
            <Inner>
              <div className="work-together__content">
                <div className="work-together__title">Let's work together!</div>
                <div className="work-together__text">To partner with up, please go ahead and use the contact form above or send us an email directly at literacymovement4more@gmail.com</div>
                <div className="work-together__subtitle">Who we partner with:</div>
                <div className="work-together__text">LM4M establishes partnerships with organizations that specialize in education, children’s care, and library or community development. Examples of organizations we’ve worked with in the past have been public primary and secondary schools, international NGO’s and non-profit organizations, private orphanages, and government- funded children’s homes. You can see a list of our partners HERE.</div>
                <div className="work-together__subtitle">Reaching out:</div>
                <div className="work-together__text">If your organization or institution has the existing infrastructure to host a library of 500+ books and/or 5-10+ laptops, then we’ll start an inquiry on your call to action. Examples of necessary infrastructure for a library space would be: shelves, bins, reading tables, chairs or sitting equipment, and electricity outlets.</div>
                <div className="work-together__text">Please be sure to include a point of contact in your email and to loop in all key stakeholders who you believe will be important in beginning a sustainable partnership. For example, organization leaders, educators, and key potential end-users of the library such as students or community members may be people who you may want to include on your email.</div>
              </div>
            </Inner>
          </div>
        </div>

      </div>
    </div>
    
    {/* <section>
      {data.takeshape.contact.relationship.map(qna => {
        return (
          <div>
            <p>{qna.question}</p>
            <p>{qna.answer.blocks[0].text}</p>
          </div>
        )
      })}
    </section> */}
  </Layout>
)

export const query = graphql`
  query {
    takeshape {
      contact {
        relationship {
          question
          answer
        }
      }
    }
  }
`

export default ContactPage
