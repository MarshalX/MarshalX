import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLink = ({ input }) => (
  <a href={input.primary.link.url}>
    <FontAwesomeIcon icon={input.primary.icon.text.split(" ")} />{" "}
    {input.primary.text.text}
  </a>
)

export default FooterLink
