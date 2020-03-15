import React, { Component } from "react"
import { Container, Nav, Navbar as BNavBar } from "react-bootstrap"
import { Link } from "gatsby"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavLink = props => {
  const { anchor } = props

  return (
    <li className="nav-item mx-0 mx-lg-1">
      {anchor ? (
        <a
          href={`#${props.href}`}
          className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger`}
        >
          {props.name}
        </a>
      ) : (
        <Link
          to={`${props.href}`}
          className={`nav-link py-3 px-0 px-lg-3 rounded`}
        >
          {props.name}
        </Link>
      )}
    </li>
  )
}

export default class Navbar extends Component {
  render() {
    return (
      <>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <BNavBar
          bg="secondary"
          expand="lg"
          className="fixed-top text-uppercase navbar-shrink"
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
              Меню <FontAwesomeIcon icon={["fas", "bars"]} />
            </BNavBar.Toggle>
            <BNavBar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {this.props.main ? (
                  <>
                    <NavLink href="about" name="Обо мне" anchor />
                    <NavLink href="posts" name="Блог" />
                    <NavLink href="skills" name="Навыки" anchor />
                    <NavLink href="projects" name="Проекты" anchor />
                    <NavLink href="contacts" name="Контакты" anchor />
                  </>
                ) : (
                  <>
                    <NavLink href="/" name="Главная" />
                    <NavLink href="posts" name="Блог" />
                    <NavLink href="categories" name="Категории" />
                  </>
                )}
              </Nav>
            </BNavBar.Collapse>
          </Container>
        </BNavBar>
      </>
    )
  }
}
