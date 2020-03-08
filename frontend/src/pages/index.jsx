import React, { Component } from "react"
import { Layout, Listing } from "../components"
import { Col, Row } from "react-bootstrap"
import Section from "../components/Section"
import ContactForm from "../components/ContactForm"
import { graphql } from "gatsby"
import ContactLinks from "../components/Listing/ContactLinks"

class Index extends Component {
  render() {
    const {
      data: { homepage, posts, contact_links },
    } = this.props

    const before_name = (
      <img
        className="img-fluid mb-5 d-block mx-auto border-2 border-white rounded-circle"
        src="profile.png"
        alt=""
      />
    )

    return (
      <Layout mainNavBar={true}>
        <Section
          dark={true}
          id="about"
          name={homepage.data.title.text}
          before_name={before_name}
          masthead={true}
        >
          <Row>
            <Col lg="4" className="ml-auto">
              <h5 className="text-center text-uppercase text-white">
                Информация о себе
              </h5>
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: homepage.data.content.html,
                }}
              />
            </Col>
            <Col lg="4" className="mr-auto">
              <h5 className="text-center text-uppercase text-white">
                И чем я занимаюсь
              </h5>
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: homepage.data.footer.html,
                }}
              />
            </Col>
          </Row>
        </Section>
        <Section id="awards" name="Недавние посты">
          <Listing posts={posts.nodes} />
        </Section>
        <Section dark={true} id="skills" name="Навыки">
          <Row>
            <Col lg className="ml-auto text-justify">
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: homepage.data.footer.html,
                }}
              />
            </Col>
          </Row>
        </Section>
        <Section id="projects" name="Проекты">
          {/*TODO graphql*/}
          <p>Josko</p>
        </Section>
        <Section dark={true} id="contacts" name="Контакты">
          <ContactLinks links={contact_links.data.body} />
        </Section>
        <Section id="contact-me" name="Связаться со мной">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <ContactForm />
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
        footer {
          html
        }
      }
    }
    posts: allPrismicPost(
      limit: 3
      sort: { fields: [data___date], order: DESC }
    ) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    contact_links: prismicContactLinks {
      data {
        body {
          id
          primary {
            icon {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
  }
`
