import React from "react"
import { graphql } from "gatsby"
import { Layout, Listing } from "../components"
import Section from "../components/Section"
import website from "../../config"
import SEO from "../components/SEO"

const Category = ({
  data: {
    posts: { nodes, totalCount },
    category,
  },
  location,
}) => (
  <Layout customSEO>
    <SEO
      title={`Категория: ${category.data.name} | ${website.titleAlt}`}
      headline={`Категория: ${category.data.name}`}
      pathname={location.pathname}
    />
    <Section
      dark={true}
      id="category"
      name={`Категория: ${category.data.name}`}
      masthead={true}
    />
    <Section id="category_count" name={`Постов в категории: ${totalCount}`}>
      <Listing posts={nodes} />
    </Section>
  </Layout>
)

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    category: prismicCategory(uid: { eq: $category }) {
      uid
      data {
        name
      }
    }
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: {
            elemMatch: {
              category: { document: { elemMatch: { uid: { eq: $category } } } }
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
