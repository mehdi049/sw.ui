import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function ProfileInfoModal() {
  return (
    <>
      <Row>
        <Col xs={3} sm={2} md={4}>
          <img
            src={require("../../../images/avatars/128_1.png")}
            className="profile-img"
            alt=""
          />
        </Col>
        <Col xs={9} sm={10} md={8}>
          <p className="dark-gray">Mehdi Marouani</p>
          <p>
            <FontAwesomeIcon icon={faMapMarker} className="blue" /> &nbsp;
            Bizerte, Bizerte nord
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="blue" /> &nbsp; +216
            25 447 885
          </p>
        </Col>
      </Row>
    </>
  );
}

export default ProfileInfoModal;
