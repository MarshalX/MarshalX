import React, { Component } from "react"
import { ProjectSliceZone } from "./index"
import { Card } from "react-bootstrap"
import styled from "@emotion/styled"

const StyledHeader = styled(Card.Header)`
  p {
    margin-bottom: 0rem;
  }
`

export default class Project extends Component {
  render() {
    const { data } = this.props
    return (
      <Card
        border={data.border_color.toLowerCase()}
        bg={data.background_color.toLowerCase()}
      >
        <StyledHeader
          className={`border-${data.border_color.toLowerCase()}`}
          dangerouslySetInnerHTML={{
            __html: data.name.html,
          }}
        />
        <Card.Body>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: data.description.html,
            }}
          />
        </Card.Body>
        <ProjectSliceZone
          allSlices={data.body}
          border={data.border_color.toLowerCase()}
        />
      </Card>
    )
  }
}
