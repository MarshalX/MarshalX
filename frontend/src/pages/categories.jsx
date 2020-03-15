import React, { Component } from "react"
import { Layout } from "../components"
import Section from "../components/Section"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { ListGroup } from "react-bootstrap"
import styled from "@emotion/styled"
import website from "../../config"
import SEO from "../components/SEO"

const StyledLink = styled(Link)`
  font-size: 2.369rem;
  font-style: normal;
`

export default class Categories extends Component {
  render() {
    const {
      data: { categories },
      location,
    } = this.props

    const categorySet = new Set()

    categories.edges.forEach(edge => {
      if (edge.node.data.categories[0].category) {
        edge.node.data.categories.forEach(cat => {
          categorySet.add(cat.category.document[0].data.name)
        })
      }
    })

    const categoryList = Array.from(categorySet)

    return (
      <Layout customSEO>
        <SEO
          title={`Все категории | ${website.titleAlt}`}
          pathname={location.pathname}
        />
        <Section dark={true} id="header" name="Категории" masthead={true} />
        <Section id="categories" compact={true}>
          <ListGroup>
            {categoryList.map(cat => (
              <ListGroup.Item key={cat}>
                <StyledLink to={`/categories/${kebabCase(cat)}`}>
                  {cat}
                </StyledLink>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query CategoriesQuery {
    categories: allPrismicPost {
      edges {
        node {
          id
          uid
          data {
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
  }
`
