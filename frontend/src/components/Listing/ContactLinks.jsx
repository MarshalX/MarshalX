import React, { Component } from "react"

// TODO rewrite on normal slice zone and slice items components, fix icons

export default class ContactLinks extends Component {
  render() {
    const { links } = this.props
    return (
      <ul className="list-inline mb-0 text-center">
        {links.map(link => (
          <li className="list-inline-item" key={link.id}>
            <a
              className="btn btn-fixed btn-outline-light text-center rounded-circle"
              href={link.data.body[1].primary.link.text}
            >
              <i className={link.data.body[0].primary.icon.text} />
            </a>
          </li>
        ))}
      </ul>
    )
  }
}
