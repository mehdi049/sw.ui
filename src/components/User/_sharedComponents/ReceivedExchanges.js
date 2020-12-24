import React from "react";
import { Badge, Row, Col, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faExchangeAlt,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function ReceivedExchanges() {
  return (
    <>
      <Row>
        <Col>
          <h4>8 demandes d'échanges reçus</h4>
          <br />
        </Col>
      </Row>
      {[...Array(8)].map((x, i) => (
        <div key={i} className="exchange-list">
          <Row>
            <Col xs={4}>
              <Row>
                <Col lg={3}>
                  <Link to="/item">
                    <div className="item-img-container-sm">
                      <span className="helper"></span>
                      <img
                        src={require("../../../images/uploads/item1.png")}
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
                      <span className="helper"></span>
                      <img
                        src={require("../../../images/uploads/item1.png")}
                        className="item-img"
                        alt=""
                      />
                    </div>
                  </Link>
                </Col>
                <Col>
                  <Badge className="green2-bg">Eléctronique</Badge>
                  &nbsp;
                  <span className="small">Par Ahmed Chetouane</span>
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
    </>
  );
}

export default ReceivedExchanges;
