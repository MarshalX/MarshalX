import React from "react"

const BodyText = ({ input }) => (
  <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
)

export default BodyText
