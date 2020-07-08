import React from "react"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"
import Footer from "../components/footer"
import Divider from "../components/divider"

const ContactPage = ({ data, path }) => {
  const contactData = data.takeshape.getContact

  return (
    <Layout path={path}>
      <SEO title="Contact" />
      <div className="contact">
        <div className="contact__inner">

          <div className="get-in-touch">
            <div className="get-in-touch__wrapper">
              <Inner>
                <div className="get-in-touch__content">
                  <div className="get-in-touch__title" dangerouslySetInnerHTML={{ __html: contactData.getInTouchSection.title.blocks[0].text }} />
                  {contactData.getInTouchSection.text.blocks.map((value, index) => {
                    return <div className="get-in-touch__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                  })}
                  <div className="get-in-touch__button">Contact</div>
                </div>
              </Inner>
            </div>
          </div>

          <div className="work-together">
            <div className="work-together__wrapper">
              <Inner>
                <div className="work-together__content">
                  <div className="work-together__text__content">
                    <div className="work-together__title" dangerouslySetInnerHTML={{ __html: contactData.workTogetherSection.title.blocks[0].text }} />
                    {contactData.workTogetherSection.text.blocks.map((value, index) => {
                      return <div className="work-together__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                    })}
                    {contactData.workTogetherSection.contactDetails.map((value, index) => {
                      return (
                        <div className="work-together__details" key={index}>
                          <div className="work-together__subtitle" dangerouslySetInnerHTML={{ __html: value.subtitle.blocks[0].text }} />
                          {value.text.blocks.map((value, index) => {
                            return <div className="work-together__text" key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                          })}
                        </div>
                      )
                    })}
                  </div>
                  <div className="work-together__icon__content">
                    {contactData.workTogetherSection.icons.map((value, index) => {
                      return (
                        <div className="work-together__icon">
                          <img src={getImageUrl(value.image.path)} />
                        </div>
                      ) 
                    })}
                  </div>
                </div>
              </Inner>
              <Divider color="green" type="top" />
            </div>
          </div>

          <div className="headshots">
            <div className="headshots__wrapper">
              <Inner>
                <div className="headshots__content">
                  <div className="headshots__headshot">
                    <div className="headshots__image headshots__first__image">
                      <img src={getImageUrl(contactData.headshotsSection.first.image.path)} />
                    </div>
                    <div className="headshots__name">Seema Korumilli</div>
                    <div className="headshots__email">seemakorumilli@gmail.com</div>
                  </div>

                  <div className="headshots__headshot">
                    <div className="headshots__image headshots__second__image">
                      <img src={getImageUrl(contactData.headshotsSection.second.image.path)} />
                    </div>
                    <div className="headshots__name">Suraj Korumilli</div>
                    <div className="headshots__email">surajkorumilli@gmail.com</div>
                  </div>
                </div>
              </Inner>
            </div>
          </div>

          <Footer light backgroundColor="blue" />

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
}

export const query = graphql`
  query {
    takeshape {
      getContact {
        getInTouchSection {
          title
          text
        }
        workTogetherSection {
          title
          text
          contactDetails {
            subtitle
            text
          }
          icons {
            image {
              path
            }
          }
        }
        headshotsSection {
          first {
            name
            email
            image {
              path
            }
          }
          second {
            name
            email
            image {
              path
            }
          }
        }
      }
    }
  }
`

// relationship {
//   question
//   answer
// }

export default ContactPage
