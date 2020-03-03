import React from "react"
import { graphql } from "gatsby"
import { Layout, Listing } from "../components"
import { Container } from "react-bootstrap"

const Category = ({
  pageContext: { category },
  data: {
    posts: { nodes, totalCount },
  },
}) => (
  <Layout>
    <Container>
      <div>
        <p>Category</p>
        <h1>{category}</h1>
      </div>
      <div>
        <h2 style={{ marginTop: "4rem" }}>
          {totalCount} {totalCount === 1 ? "Post" : "Posts"}{" "}
          {totalCount === 1 ? "was" : "were"} tagged with "{category}"
        </h2>
        <Listing posts={nodes} />
      </div>
    </Container>
  </Layout>
)

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: {
            elemMatch: {
              category: {
                document: { elemMatch: { data: { name: { eq: $category } } } }
              }
            }
          }
        }
      }
    ) {
      totalCount
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
