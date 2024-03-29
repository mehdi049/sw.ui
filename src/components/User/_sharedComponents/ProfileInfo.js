import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faSyncAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

function ProfileInfo() {
  return (
    <>
      <h3>Mon profile</h3>
      <Row>
        <Col xs={3} sm={12} className="profile-info">
          <FontAwesomeIcon icon={faEye} className="blue" />
          &nbsp;&nbsp; <span className="bold big dark-blue">118</span>{" "}
          <span className="d-none d-sm-block d-md-inline">fois</span>
        </Col>
        <Col xs={3} sm={12} className="profile-info">
          <FontAwesomeIcon icon={faHeart} className="blue" />
          &nbsp;&nbsp; <span className="bold big dark-blue">12</span>{" "}
          <span className="d-none d-sm-block d-md-inline">personne(s)</span>
        </Col>
        <Col xs={3} sm={12} className="profile-info">
          <FontAwesomeIcon icon={faSyncAlt} className="blue" />
          &nbsp;&nbsp; <span className="bold big dark-blue">3</span>{" "}
          <span className="d-none d-sm-block d-md-inline">en cours</span>
        </Col>
        <Col xs={3} sm={12} className="profile-info">
          <FontAwesomeIcon icon={faExchangeAlt} className="blue" />
          &nbsp;&nbsp; <span className="bold big dark-blue">2</span>{" "}
          <span className="d-none d-sm-block d-md-inline">
            échange(s) aboutie
          </span>
        </Col>
      </Row>
    </>
  );
}

export default ProfileInfo;
