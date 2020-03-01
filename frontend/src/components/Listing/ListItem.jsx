import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Categories from "./Categories"

const StyledLink = styled(Link)`
  font-size: 2.369rem;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props
    return (
      <li>
        <p>
          {node.data.date} —{" "}
          {categories && <Categories categories={categories} />}
        </p>
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
      </li>
    )
  }
}
