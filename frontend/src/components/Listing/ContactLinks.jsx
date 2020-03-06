import React, { Component } from "react"
import ContactLink from "../../slices/ContactLink"
import { ListGroup } from "react-bootstrap"

export default class ContactLinks extends Component {
  render() {
    const { links } = this.props
    return (
      <>
        {links.map((
          link // node
        ) => (
          <ListGroup className="mb-0 text-center">
            {link.data.body.map(contact_link => (
              <ListGroup.Item>
                <ContactLink key={contact_link.id} input={contact_link} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        ))}
      </>
    )
  }
}
