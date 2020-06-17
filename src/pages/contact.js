// contact form
// social media
// get involved (partners, donors, volunteers)
// FAQ

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Ways to Get in Touch</h1>
    <h2>Other questions?</h2>
    <p>Send us a quick message!</p>
    {/* contact form */}
    <form>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label for="name">Subject</label>
              <textarea className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label for="name">Message</label>
            <textarea className="form-control" />
          </div>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
    <section>
      {data.takeshape.contact.relationship.map(qna => {
        return (
          <div>
            <p>{qna.question}</p>
            <p>{qna.answer.blocks[0].text}</p>
          </div>
        )
      })}
    </section>
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
