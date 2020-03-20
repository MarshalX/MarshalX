import React, { Component } from "react"
import { Container, Nav, Navbar as BNavBar } from "react-bootstrap"
import { Link } from "gatsby"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "@emotion/styled"

const StyledNavBar = styled(BNavBar)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  font-family: "Montserrat", serif;

  .navbar-brand,
  .navbar-brand:hover,
  .navbar-brand:active,
  .navbar-brand:focus {
    color: #fff;
  }

  .navbar-nav {
    margin-top: 1rem;
    letter-spacing: 0.0625rem;
  }

  .navbar-nav li.nav-item a.nav-link {
    color: #fff;
  }

  .navbar-nav li.nav-item a.nav-link:hover {
    color: ${props => (props.main ? "#ff5a00" : "#fff")};
  }

  .navbar-nav li.nav-item a.nav-link:active,
  .navbar-nav li.nav-item a.nav-link:focus {
    color: #fff;
  }

  .navbar-nav li.nav-item a.nav-link.active {
    color: #ff5a00;
  }

  .navbar-toggler {
    font-size: 80%;
    padding: 0.8rem;
  }

  @media (min-width: 992px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
    transition: padding-top 0.3s, padding-bottom 0.3s;

    .navbar-brand {
      font-size: 2em;
      -webkit-transition: font-size 0.3s;
      transition: font-size 0.3s;
    }

    .navbar-nav {
      margin-top: 0;
    }

    .navbar-nav > li.nav-item > a.nav-link.active {
      color: #fff;
      background: #ff5a00;
    }

    .navbar-nav > li.nav-item > a.nav-link.active:active,
    .navbar-nav > li.nav-item > a.nav-link.active:focus,
    .navbar-nav > li.nav-item > a.nav-link.active:hover {
      color: #fff;
      background: #ff5a00;
    }
  }
`

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
        <StyledNavBar
          bg={this.props.main ? "secondary" : "primary"}
          expand="lg"
          className={`fixed-top text-uppercase navbar-shrink`}
          id="nav"
          main={this.props.main}
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
                    <NavLink href="/blog/posts" name="Блог" />
                    <NavLink href="skills" name="Навыки" anchor />
                    <NavLink href="projects" name="Проекты" anchor />
                    <NavLink href="contacts" name="Контакты" anchor />
                  </>
                ) : (
                  <>
                    <NavLink href="/" name="Главная" />
                    <NavLink href="/blog/posts" name="Блог" />
                    <NavLink href="/blog/categories" name="Категории" />
                  </>
                )}
              </Nav>
            </BNavBar.Collapse>
          </Container>
        </StyledNavBar>
      </>
    )
  }
}
