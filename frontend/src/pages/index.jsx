import React, {Component} from "react"
import {Layout, Listing} from "../components"
import {Col, Row} from "react-bootstrap"
import Section from "../components/Section"
import ContactForm from "../components/ContactForm"
import {graphql} from "gatsby"
import ContactLinks from "../components/Listing/ContactLinks"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Projects from "../components/Listing/Projects"

const StyledDiv = styled.div`
  p {
    text-indent: 25px;
    margin-bottom: 1rem;
  }
`

class TextContent extends Component {
  render() {
    return (
      <Row>
        <Col lg className="ml-auto text-justify">
          <StyledDiv
            className="lead"
            dangerouslySetInnerHTML={{
              __html: this.props.html,
            }}
          />
        </Col>
      </Row>
    )
  }
}

export default class Index extends Component {
  render() {
    const {
      data: {index, posts, projects},
    } = this.props

    const before_name = (
      <Img
        className="img-fluid mb-5 d-block mx-auto border-2 border-white rounded-circle mt-5"
        fixed={index.data.photo.localFile.childImageSharp.fixed}
        alt={index.data.full_name.text}
      />
    )

    return (
      <Layout mainNavBar={true}>
        <Section
          dark={true}
          id="about"
          name={index.data.full_name.text}
          before_name={before_name}
          masthead={true}
        >
          <TextContent html={index.data.summary.html}/>
        </Section>
        <Section id="posts" name="Недавние посты">
          <Listing posts={posts.nodes}/>
        </Section>
        <Section dark={true} id="skills" name="Навыки">
          <TextContent html={index.data.skills.html}/>
        </Section>
        <Section id="projects" name="Проекты">
          <Projects projects={projects.nodes}/>
        </Section>
        <Section dark={true} id="contacts" name="Контакты">
          <ContactLinks links={index.data.contact_links}/>
        </Section>
        <Section id="contact-me" name="Связаться со мной">
          <Row>
            <Col lg="8" className="mx-auto">
              <ContactForm formId={index.data.contact_email.text}/>
            </Col>
          </Row>
        </Section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    index: prismicIndex {
      data {
        contact_email {
          text
        }
        contact_links {
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
        full_name {
          text
        }
        photo {
          localFile {
            childImageSharp {
              fixed(width: 250, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        skills {
          html
        }
        summary {
          html
        }
      }
    }
    posts: allPrismicPost(
      limit: 5
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
                uid
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProject(sort: { fields: [data___date], order: DESC }) {
      nodes {
        id
        data {
          background_color
          border_color
          name {
            html
          }
          description {
            html
          }
          body {
            ... on PrismicProjectBodyFooterLink {
              id
              slice_type
              primary {
                link {
                  url
                }
                icon {
                  text
                }
                text {
                  text
                }
              }
            }
            ... on PrismicProjectBodyFooterLinkButton {
              slice_type
              primary {
                link {
                  url
                }
                icon {
                  text
                }
                text {
                  text
                }
              }
            }
            ... on PrismicProjectBodyFooterText {
              slice_type
              primary {
                text {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`
