import React, { Component } from "react"
import { Container, Nav, Navbar as BNavBar } from "react-bootstrap"
import { Link } from "gatsby"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        <FontAwesomeIcon icon={["fas", "star"]} />
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
              Меню <FontAwesomeIcon icon={["fas", "bars"]} />
            </BNavBar.Toggle>
            <BNavBar.Collapse id="basic-navbar-nav">
              <BNavBar.Nav className="ml-auto">
                {this.props.main ? (
                  <>
                    <NavLink href="about" name="Обо мне" />
                    <Link to="/posts">
                      <NavLink href="blog" name="Блог" />
                    </Link>
                    <NavLink href="skills" name="Навыки" />
                    <NavLink href="projects" name="Проекты" />
                    <NavLink href="contacts" name="Контакты" />
                  </>
                ) : (
                  <>
                    <Link to="/">
                      <NavLink href="home" name="Главная" />
                    </Link>
                    <Link to="/posts">
                      <NavLink href="blog" name="Блог" />
                    </Link>
                    <Link to="/categories">
                      <NavLink href="categories" name="Категории" />
                    </Link>
                  </>
                )}
              </BNavBar.Nav>
            </BNavBar.Collapse>
          </Container>
        </BNavBar>
      </>
    )
  }
}
