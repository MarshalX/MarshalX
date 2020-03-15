import React, { Component } from "react"
import Project from "../Project"
import { CardColumns } from "react-bootstrap"

export default class Projects extends Component {
  render() {
    const { projects } = this.props
    return (
      <CardColumns>
        {projects.map(project => (
          <Project data={project.data} key={project.id} />
        ))}
      </CardColumns>
    )
  }
}
