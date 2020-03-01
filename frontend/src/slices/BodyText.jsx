import React from "react"
import styled from "@emotion/styled"

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
`

const BodyText = ({ input }) => (
  <Content dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
)

export default BodyText
