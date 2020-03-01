import React from "react"
import styled from "@emotion/styled"

const Content = styled.div`
  padding-bottom: 2rem;
  max-width: ${props => props.theme.maxWidthText};
`

const CodeBlock = ({ input }) => (
  <Content
    dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }}
  />
)

export default CodeBlock
