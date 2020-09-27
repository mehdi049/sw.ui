import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid={true} id="footer" className="dark-blue-bg">
        <Container>
          <Row>
            <Col lg={7}>
              <span>Switch 2020 tous droits réservés</span>
            </Col>
            <Col>
              <Link to="/contact">Contacter nous</Link> &nbsp;&nbsp;
              <Link to="/terms">Conditions d’utilisation</Link> &nbsp;&nbsp;
              <Link to="/help">Aide</Link> &nbsp;&nbsp;
              <Link to="/ads">Publicité</Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
