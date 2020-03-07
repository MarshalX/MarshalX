import React from "react"

const Quote = ({ input }) => (
  <blockquote>
    <div dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
  </blockquote>
)

export default Quote
