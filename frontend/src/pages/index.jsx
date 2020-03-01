import React, { Component } from "react"
import { graphql } from "gatsby"
import { Layout, Listing } from "../components"
import { Container } from "react-bootstrap"

class Index extends Component {
  render() {
    const {
      data: { homepage, posts },
    } = this.props
    return (
      <Layout>
        <Container>
          <div>
            <h1>{homepage.data.title.text}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: homepage.data.content.html }}
            />
          </div>

          <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <h1 style={{ marginTop: "4rem" }}>Recent posts</h1>
            <Listing posts={posts.nodes} />
          </div>
        </Container>
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
