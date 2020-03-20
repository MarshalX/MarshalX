import React, { Component } from "react"
import { Link } from "gatsby"

export default class Categories extends Component {
  render() {
    const { categories } = this.props
    return (
      <>
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <Link to={`/blog/category/${cat[0]}`}>{cat[1]}</Link>
          </React.Fragment>
        ))}
      </>
    )
  }
}
