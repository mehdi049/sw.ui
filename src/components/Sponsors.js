import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Sponsors() {
  return (
    <Container fluid={true} id="sponsors-section">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center dark-gray">Sponsorisé par</h1>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg="3">
            <img
              src={require("../images/sponsors/oddo.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
          <Col lg="3">
            <img
              src={require("../images/sponsors/amaris.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
          <Col lg="3">
            <img
              src={require("../images/sponsors/esprit.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
          <Col lg="3">
            <img
              src={require("../images/sponsors/amazon.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <img
              src={require("../images/sponsors/oddo.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
          <Col lg="3">
            <img
              src={require("../images/sponsors/amaris.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
          <Col lg="3">
            <img
              src={require("../images/sponsors/esprit.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
          <Col lg="3">
            <img
              src={require("../images/sponsors/amazon.png")}
              className="sponsor-img"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Sponsors;
