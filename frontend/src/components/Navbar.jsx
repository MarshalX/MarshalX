import React, { Component } from "react"
import { Container, Nav, Navbar as BNavBar } from "react-bootstrap"

const NavLink = props => {
  return (
    <li className="nav-item mx-0 mx-lg-1">
      <Nav.Link
        href={`#${props.href}`}
        className="py-3 px-0 px-lg-3 rounded js-scroll-trigger"
      >
        {props.name}
      </Nav.Link>
    </li>
  )
}

export default class Navbar extends Component {
  render() {
    return (
      <>
        <BNavBar
          bg="secondary"
          expand="lg"
          className="fixed-top text-uppercase"
          id="mainNav"
        >
          <Container>
            <BNavBar.Brand href="#page-top" className="js-scroll-trigger">
              Marshal
            </BNavBar.Brand>
            <BNavBar.Toggle
              aria-controls="basic-navbar-nav"
              className="btn-primary navbar-toggler-right text-uppercase text-white rounded"
            >
              Меню TODO icon
            </BNavBar.Toggle>
            <BNavBar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav ml-auto">
                <NavLink href="about" name="Обо мне" />
                <NavLink href="awards" name="Награды" />
                <NavLink href="skills" name="Навыки" />
                <NavLink href="projects" name="Проекты" />
                <NavLink href="contacts" name="Контакты" />
              </ul>
            </BNavBar.Collapse>
          </Container>
        </BNavBar>
      </>
    )
  }
}
