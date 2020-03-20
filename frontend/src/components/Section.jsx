import React, { Component } from "react"
import { Container } from "react-bootstrap"
import styled from "@emotion/styled"

const StyledSection = styled.section`
  padding: 6rem 0;

  h2 {
    font-size: 2.25rem;
    line-height: 2rem;
  }

  @media (min-width: 992px) {
    h2 {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }
`

const StyledMastheadSection = styled(StyledSection)`
  padding-bottom: 2rem;

  h1 {
    font-size: 8vw;
    line-height: 3rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  @media (min-width: 992px) {
    padding-bottom: 2rem;

    h1 {
      font-size: 3.75em;
      line-height: 4rem;
    }

    h2 {
      font-size: 1.5em;
    }
  }
`

class SectionContent extends Component {
  render() {
    const { text, star, name, before_name, compact } = this.props

    return (
      <Container>
        {before_name}
        {!compact ? (
          <>
            <h1 className={`${text} text-center text-uppercase mb-0`}>
              {name}
            </h1>
            <hr className={`${star} mb-5`} />
          </>
        ) : null}
        {this.props.children}
      </Container>
    )
  }
}

export default class Section extends Component {
  render() {
    const { dark, id, masthead } = this.props

    const bg = dark ? "bg-primary" : "bg-white"
    const text = dark ? "text-white" : "text-secondary"
    const star = dark ? "star-light" : "star-dark"

    return (
      <>
        {masthead ? (
          <StyledMastheadSection className={`${bg} ${text} mb-0`} id={id}>
            <SectionContent {...this.props} star={star} text={text} />
          </StyledMastheadSection>
        ) : (
          <StyledSection className={`${bg} ${text} mb-0`} id={id}>
            <SectionContent {...this.props} star={star} text={text} />
          </StyledSection>
        )}
      </>
    )
  }
}
