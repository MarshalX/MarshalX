import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"

export default class Footer extends Component {
  render() {
    return (
      <footer className="copyright py-2 text-center text-white">
        <Container>
          <Row>
            <Col md="4" lg="0" className="mb-5">
              <h4 className="text-uppercase mb-4">Лицензия</h4>
              <p className="lead-0, mb-0">
                <a href="https://www.gnu.org/licenses/gpl-3.0.ru.html">
                  GNU General Public License v3.0
                </a>
              </p>
            </Col>
            <Col md="4" lg="0" className="mb-5">
              <h4 className="text-uppercase mb-4">
                &copy; marshal.by {new Date().getFullYear()}
              </h4>
            </Col>
            <Col md="4">
              <h4 className="text-uppercase mb-4">Дизайн</h4>
              <p className="lead-0 mb-0">
                Основан на Freelancer шаблоне, разработанным{" "}
                <a href="https://github.com/BlackrockDigital/startbootstrap-freelancer">
                  Start Bootstrap'ом
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
