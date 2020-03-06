import React, { Component } from "react"
import ContactLink from "../../slices/ContactLink"

// TODO fix icons

export default class ContactLinks extends Component {
  render() {
    const { links } = this.props
    return (
      <>
        {links.map((
          link // node
        ) => (
          <ul className="list-inline mb-0 text-center">
            {link.data.body.map(contact_link => (
              <li className="list-inline-item">
                <ContactLink key={contact_link.id} input={contact_link} />
              </li>
            ))}
          </ul>
        ))}
      </>
    )
  }
}
