import React, { useState } from "react";
import { Badge, Row, Col, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faExchangeAlt,
  faCheckCircle,
  faTimesCircle,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import ProfileInfoModal from "./ProfleInfoModal";

function ReceivedExchanges() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Col xs={6}>
          <h4>8 demandes d'échanges reçus</h4>
          <br />
        </Col>
        <Col xs={6}>
          <Form.Group>
            <Form.Control as="select">
              <option>En cours</option>
              <option>Accepté</option>
              <option>Annulé</option>
            </Form.Control>
          </Form.Group>
          <br />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="dark-blue">
            Information sur profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProfileInfoModal />
        </Modal.Body>
      </Modal>

      {[...Array(8)].map((x, i) => (
        <div key={i} className="exchange-list">
          <Row>
            <Col xs={4}>
              <Row>
                <Col lg={3}>
                  <Link to="/item">
                    <div
                      className="item-img-container-sm"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../images/uploads/item1-1.png") +
                          ")",
                      }}
                    ></div>
                  </Link>
                </Col>
                <Col>
                  <Badge className="green2-bg">Eléctronique</Badge>
                  <p>
                    <span className="bold blue">Samsung galaxi s20</span>
                    <span className="price-info blue">
                      <FontAwesomeIcon icon={faCoins} /> 350 Dt
                    </span>
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
                    <div
                      className="item-img-container-sm"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../images/uploads/item1-1.png") +
                          ")",
                      }}
                    ></div>
                  </Link>
                </Col>
                <Col>
                  <Badge className="green2-bg">Eléctronique</Badge>
                  &nbsp;
                  <span
                    className="small underline pointer"
                    onClick={handleShow}
                  >
                    Par Ahmed Chetouane
                  </span>
                  <p>
                    <span className="bold blue">Samsung galaxi s20</span>
                    <span className="price-info blue">
                      <FontAwesomeIcon icon={faCoins} /> 350 Dt
                    </span>
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
