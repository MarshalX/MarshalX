import React, { Component } from "react"
import ListItem from "./ListItem"
import { ListGroup } from "react-bootstrap"

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <ListGroup>
        {posts.map(post => {
          let categories = false
          if (post.data.categories[0].category) {
            categories = post.data.categories.map(c => [
              c.category.document[0].uid,
              c.category.document[0].data.name,
            ])
          }
          return <ListItem key={post.uid} node={post} categories={categories} />
        })}
      </ListGroup>
    )
  }
}
