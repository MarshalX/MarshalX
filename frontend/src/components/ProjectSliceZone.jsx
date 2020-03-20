import React, { Component } from "react"
import { FooterText, FooterLink, FooterLinkButton } from "../slices"
import { Card } from "react-bootstrap"

const Footer = props => {
  const { border, children } = props
  return <Card.Footer className={`border-${border}`}>{children}</Card.Footer>
}

export default class ProjectSliceZone extends Component {
  render() {
    const { allSlices, border } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        case "footer_text":
          return (
            <Footer border={border} key={s.id}>
              <FooterText input={s} />
            </Footer>
          )
        case "footer_link":
          return (
            <Footer border={border} key={s.id}>
              <FooterLink input={s} />
            </Footer>
          )
        case "footer_link_button":
          return (
            <Footer border={border} key={s.id}>
              <FooterLinkButton input={s} />
            </Footer>
          )
        default:
          return null
      }
    })
    return <>{slice}</>
  }
}
