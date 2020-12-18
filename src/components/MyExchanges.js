import React from "react";
import { Badge, Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComment,
  faExchangeAlt,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MyExchanges() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h3>Demandes d'échange</h3>
          </Col>
        </Row>
        {[...Array(8)].map((x, i) => (
          <>
            <Row key={i}>
              <Col lg={3}>
                <Link to="/item">
                  <img
                    src={require("../images/uploads/item1.png")}
                    className="item-img-small"
                    alt=""
                  />
                  <h4>Samsung galaxi s20</h4>
                </Link>
              </Col>
              <Col lg={1}>
                <br />
                <br />
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="blue"
                  size="2x"
                />
              </Col>
              <Col lg={3}>
                <Link to="/item">
                  <img
                    src={require("../images/uploads/item1-1.png")}
                    className="item-img-small"
                    alt=""
                  />
                  <h4>Samsung galaxi s20</h4>
                </Link>
              </Col>
              <Col lg={1}></Col>
              <Col lg={1}>
                <br />

                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="blue pointer"
                  size="2x"
                />
                <br />
                <br />
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="blue pointer"
                  size="2x"
                />
              </Col>
            </Row>
            <br />
            <br />
          </>
        ))}
      </Container>
    </>
  );
}

export default MyExchanges;
