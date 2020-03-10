import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "@emotion/styled"

const StyledCol = styled(Col)`
  p {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.15;
    margin-bottom: 1rem !important;
  }
`

export default class Footer extends Component {
  render() {
    const {
      data: { footer },
    } = this.props
    return (
      <footer className="copyright py-2 text-center text-white">
        <Container>
          <Row>
            {footer.data.body.map(column => (
              <StyledCol md="4" lg="0">
                <h4 className="text-uppercase mb-4">
                  {column.primary.title.text}
                </h4>
                <span
                  dangerouslySetInnerHTML={{
                    __html: column.primary.content.html,
                  }}
                />
              </StyledCol>
            ))}
          </Row>
        </Container>
      </footer>
    )
  }
}
