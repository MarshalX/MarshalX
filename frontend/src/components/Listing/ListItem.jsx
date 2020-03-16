import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Categories from "./Categories"
import { ListGroup } from "react-bootstrap"

const StyledLink = styled(Link)`
  font-size: 2.369rem;
  font-style: normal;
`

const StyledP = styled.p`
  color: black;
`

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props
    return (
      <ListGroup.Item>
        <StyledP>
          {node.data.date} —{" "}
          {categories && <Categories categories={categories} />}
        </StyledP>
        <StyledLink to={`/blog/post/${node.uid}`}>
          {node.data.title.text}
        </StyledLink>
      </ListGroup.Item>
    )
  }
}
