import React, {Component} from "react"
import {ProjectSliceZone} from "./index"
import {Card} from "react-bootstrap"

export default class Project extends Component {
  render() {
    const {data} = this.props
    return (
      <Card
        border={data.border_color.toLowerCase()}
        bg={data.background_color.toLowerCase()}
      >
        <Card.Header
          className={`border-${data.border_color.toLowerCase()}`}
          dangerouslySetInnerHTML={{
            __html: data.name.html,
          }}
        />
        <Card.Body>
          <div className='card-text'
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
