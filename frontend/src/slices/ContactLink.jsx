import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const ContactLink = ({ input }) => (
  <a
    className="btn btn-fixed btn-outline-light text-center rounded-circle"
    href={input.primary.link.url}
  >
    <FontAwesomeIcon icon={input.primary.icon.text.split(" ")} />
  </a>
)

export default ContactLink
