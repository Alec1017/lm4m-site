import React from "react"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inner from "../components/inner"
import Footer from "../components/footer"
import FAQSection from "../components/faqSection"
import Divider from "../components/divider"
import YellowLabel from "../images/labels/yellow_label.png"
import RedLabel from "../images/labels/red_label_2.png"

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
                        <div className="work-together__icon" key={index}>
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

                  <div className="headshots__wrapper headshots__wrapper--first">
                    <div className="headshots__headshot headshots__headshot--first">
                      <div className="headshots__headshot__inner">
                        <div className="headshots__sticker headshots__sticker--yellow">
                          <img src={YellowLabel} />
                        </div>
                        <div className="headshots__image">
                          <img src={getImageUrl(contactData.headshotsSection.first.image.path)} />
                        </div>
                      </div>
                    </div>
                    <div className="headshots__text headshots__text--first">
                      <div className="headshots__name">{contactData.headshotsSection.first.name}</div>
                      <div className="headshots__email">{contactData.headshotsSection.first.email}</div>
                    </div>
                  </div>

                  <div className="headshots__wrapper headshots__wrapper--second">
                    <div className="headshots__headshot headshots__headshot--second">
                      <div className="headshots__headshot__inner">
                        <div className="headshots__sticker headshots__sticker--red">
                          <img src={RedLabel} />
                        </div>
                        <div className="headshots__image">
                          <img src={getImageUrl(contactData.headshotsSection.second.image.path)} />
                        </div>
                      </div>
                    </div>
                    <div className="headshots__text headshots__text--second">
                      <div className="headshots__name">{contactData.headshotsSection.second.name}</div>
                      <div className="headshots__email">{contactData.headshotsSection.second.email}</div>
                    </div>
                  </div>
                </div>
              </Inner>
            </div>
          </div>

          <div className="faq">
            <div className="faq__wrapper">
              <Divider color="green" type="bottom" />
              <Inner>
                <div className="faq__content">
                  <div className="faq__title" dangerouslySetInnerHTML={{ __html: contactData.faqSection.title.blocks[0].text }} />
                  <div className="faq__qna">
                    {contactData.faqSection.qnA.map((qna, index) => {
                      return <FAQSection question={qna.question} answer={qna.answer} key={index} />
                    })}
                  </div>
                </div>
              </Inner>
              <Divider color="blue" type="top" />
            </div>
          </div>

          <Footer light backgroundColor="blue">
            <div className="partners">
              <div className="partners__content">
                <div className="partners__title" dangerouslySetInnerHTML={{ __html: contactData.partnersSection.title.blocks[0].text }} />
                <div className="partners__partners">
                  {contactData.partnersSection.partners.map((value, index) => {
                    return <div className="partners__text" key={index}>{value.partner}</div>
                  })}
                </div>
              </div>

            </div>
          </Footer>

        </div>
      </div>
      
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
        faqSection {
          qnA {
            _id
            answer
            question
          }
          title
        }
        partnersSection {
          title
          partners {
            partner
          }
        }
      }
    }
  }
`

export default ContactPage
