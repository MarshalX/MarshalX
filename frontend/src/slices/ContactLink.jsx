import React from "react"

const ContactLink = ({ input }) => (
  <a
    className="btn btn-fixed btn-outline-light text-center rounded-circle"
    href={input.primary.link.url}
  >
    <i className={input.primary.icon.text} />
  </a>
)

export default ContactLink
