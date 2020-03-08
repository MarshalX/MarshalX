import React, { Component } from "react"
import ContactLink from "../../slices/ContactLink"

export default class ContactLinks extends Component {
  render() {
    const { links } = this.props
    return (
      <ul className="list-inline mb-0 text-center">
        {links.map(link => (
          <li className="list-inline-item">
            <ContactLink key={link.id} input={link} />
          </li>
        ))}
      </ul>
    )
  }
}
