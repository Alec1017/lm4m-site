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
