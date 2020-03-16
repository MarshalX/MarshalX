import React, { Component } from "react"
import { Layout } from "../../components"
import Section from "../../components/Section"
import { graphql, Link } from "gatsby"
import { ListGroup } from "react-bootstrap"
import styled from "@emotion/styled"
import website from "../../../config"
import SEO from "../../components/SEO"

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

    const categoryDict = {}

    categories.edges.forEach(edge => {
      if (edge.node.data.categories[0].category) {
        edge.node.data.categories.forEach(cat => {
          if (!categoryDict[cat.category.document[0].uid]) {
            categoryDict[cat.category.document[0].uid] =
              cat.category.document[0].data.name
          }
        })
      }
    })

    return (
      <Layout customSEO>
        <SEO
          title={`Все категории | ${website.titleAlt}`}
          pathname={location.pathname}
        />
        <Section dark={true} id="header" name="Категории" masthead={true} />
        <Section id="categories" compact={true}>
          <ListGroup>
            {Object.entries(categoryDict).map(data => (
              <ListGroup.Item key={data[0]}>
                <StyledLink to={`/blog/category/${data[0]}`}>
                  {data[1]}
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
  }
`
