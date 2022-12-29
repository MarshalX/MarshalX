import React, { Component } from "react"
import { Layout, Listing } from "../../components"
import Section from "../../components/Section"
import { graphql } from "gatsby"
import website from "../../../config"
import SEO from "../../components/SEO"

export default class Posts extends Component {
  render() {
    const {
      data: { posts },
      location,
    } = this.props

    return (
      <Layout customSEO>
        <SEO
          title={`Все публикации | ${website.titleAlt}`}
          headline={`Все публикации`}
          pathname={location.pathname}
          blog
        />
        <Section dark={true} id="header" name="Блог" masthead={true} />
        <Section id="posts" name={'Публикации в блоге'}>
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
  }
`
