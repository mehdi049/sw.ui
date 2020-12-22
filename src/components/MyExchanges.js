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
            <h3>8 Demandes d'échange</h3>
          </Col>
        </Row>
        {[...Array(8)].map((x, i) => (
          <div className="exchange-list">
            <Row key={i}>
              <Col xs={4}>
                <Row>
                  <Col lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-sm">
                        <span class="helper"></span>
                        <img
                          src={require("../images/uploads/item1.png")}
                          className="item-img"
                          alt=""
                        />
                      </div>
                    </Link>
                  </Col>
                  <Col>
                    <Badge className="green2-bg">Eléctronique</Badge>
                    <p>
                      <span className="bold blue">Samsung galaxi s20</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={2} sm={1}>
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="blue exchange-icon"
                  size="2x"
                />
              </Col>
              <Col xs={4}>
                <Row>
                  <Col lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-sm">
                        <span class="helper"></span>
                        <img
                          src={require("../images/uploads/item1.png")}
                          className="item-img"
                          alt=""
                        />
                      </div>
                    </Link>
                  </Col>
                  <Col>
                    <Badge className="green2-bg">Eléctronique</Badge>&nbsp;
                    <span className="small gray">Par Ahmed Chetouane</span>
                    <p>
                      <span className="bold blue">Samsung galaxi s20</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={1} sm={2}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="blue pointer"
                  size="2x"
                />
                &nbsp; <span className="d-none d-md-inline">&nbsp;</span>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="blue pointer"
                  size="2x"
                />
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </>
  );
}

export default MyExchanges;
