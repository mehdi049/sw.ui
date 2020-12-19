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
              <Col lg={4}>
                <Row>
                  <Col lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-sm">
                        <span class="helper"></span>
                        <img
                          src={require("../images/uploads/item1.png")}
                          className="item-img-small"
                          alt=""
                        />
                      </div>
                    </Link>
                  </Col>
                  <Col>
                    <Badge className="green2-bg">Eléctronique</Badge>&nbsp;
                    <span className="small gray">
                      <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 | &nbsp;
                      <FontAwesomeIcon icon={faComment} /> 15
                    </span>
                    <p>
                      <span className="bold blue">Samsung galaxi s20</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={1}>
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="blue"
                  size="2x"
                />
              </Col>
              <Col lg={4}>
                <Row>
                  <Col lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-sm">
                        <span class="helper"></span>
                        <img
                          src={require("../images/uploads/item1.png")}
                          className="item-img-small"
                          alt=""
                        />
                      </div>
                    </Link>
                  </Col>
                  <Col>
                    <Badge className="green2-bg">Eléctronique</Badge>&nbsp;
                    <span className="small gray">
                      Par Ahmed | <FontAwesomeIcon icon={faClock} /> 22 Aout
                      2020 | &nbsp;
                      <FontAwesomeIcon icon={faComment} /> 15
                    </span>
                    <p>
                      <span className="bold blue">Samsung galaxi s20</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={2}>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="blue pointer"
                    size="2x"
                  />
                  &nbsp; &nbsp;
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="blue pointer"
                    size="2x"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </>
  );
}

export default MyExchanges;
