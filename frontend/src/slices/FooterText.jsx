import React from "react"
import styled from "@emotion/styled"

const StyledSmall = styled.small`
  p {
    margin-bottom: 0rem;
  }
`

const FooterText = ({ input }) => (
  <StyledSmall
    className="text-muted"
    dangerouslySetInnerHTML={{ __html: input.primary.text.html }}
  />
)

export default FooterText
