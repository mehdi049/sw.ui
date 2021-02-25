import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function CommentSection() {
  return (
    <>
      <Row>
        <Col>
          <h3>3 commentaires</h3>
        </Col>
      </Row>
      {[...Array(3)].map((x, i) => (
        <Row className="comment-section" key={i}>
          <Col xs={3} sm={2} xl={1}>
            <img
              src={require("../../../images/avatars/default_m.png")}
              className="profile-img"
              alt=""
            />
          </Col>
          <Col xs={9} sm={10} xl={11}>
            <span className="dark-gray">Mehdi Marouani </span> |{" "}
            <span className="small">
              <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
            </span>
            <p className="comment-text">
              Super Fast Charging: Charge up quicker with Super Fast Charge so
              you can keep moving with more juice
            </p>
          </Col>
        </Row>
      ))}
      <Row className="comment-section">
        <Col xs={3} sm={2} xl={1}>
          <img
            src={require("../../../images/avatars/default_m.png")}
            className="profile-img"
            alt=""
          />
        </Col>
        <Col xs={9} sm={10} xl={11}>
          <span className="dark-gray">Mehdi Marouani </span>
          <Form.Control as="textarea" rows="2" />
        </Col>
      </Row>
    </>
  );
}

export default CommentSection;
