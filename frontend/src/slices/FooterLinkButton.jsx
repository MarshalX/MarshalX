import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLinkButton = ({ input }) => (
  <a className="btn btn-primary btn-block" href={input.primary.link.url}>
    <FontAwesomeIcon icon={input.primary.icon.text.split(" ")} />{" "}
    {input.primary.text.text}
  </a>
)

export default FooterLinkButton
