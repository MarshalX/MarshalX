import React, { Component } from "react"
import { Layout, Listing } from "../components"
import Section from "../components/Section"
import { graphql } from "gatsby"

export default class Posts extends Component {
  render() {
    const {
      data: { posts },
    } = this.props

    return (
      <Layout>
        <Section dark={true} id="header" name="Блог" masthead={true} />
        <Section id="posts" compact={true}>
          <Listing posts={posts.nodes} />
        </Section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query PostsQuery {
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
