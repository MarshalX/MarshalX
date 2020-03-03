import React, { Component } from "react"
import { Layout, Listing } from "../components"
import { Col, Container, Row } from "react-bootstrap"

class Index extends Component {
  render() {
    const {
      data: { homepage, posts },
    } = this.props
    return (
      <Layout>
        <header className="masthead bg-primary text-white" id="about">
          <Container>
            <img
              className="img-fluid mb-5 d-block mx-auto border-2 border-white rounded-circle"
              src="profile.png"
              alt=""
            />
            <h1 className="text-uppercase text-center mb-0">
              {homepage.data.title.text}
            </h1>
            <hr className="star-light" />
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
          </Container>
        </header>
        <section className="portfolio" id="awards">
          <Container>
            <h2 className="text-center text-uppercase text-secondary mb-0">
              Недавние посты
            </h2>
            <hr className="star-dark mb-5" />
            <Listing posts={posts.nodes} />
          </Container>
        </section>
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
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
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
  }
`
