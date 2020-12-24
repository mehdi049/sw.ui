import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhoneAlt,
  faExchangeAlt,
  faEye,
  faHeart,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

function ItemProfileInfoSection() {
  return (
    <>
      <Row>
        <Col xs={3} sm={2} md={12}>
          <img
            src={require("../../../images/avatars/128_1.png")}
            className="profile-img"
            alt=""
          />
          <span className="dark-gray profile-info-text d-none d-md-inline">
            &nbsp; Mehdi Marouani
          </span>
        </Col>
        <Col xs={9} sm={10} md={12}>
          <br className="d-none d-md-inline" />
          <p className="dark-gray profile-info-text d-block d-sm-inline d-md-none">
            Mehdi Marouani
          </p>
          <p className="profile-info-text">
            <FontAwesomeIcon icon={faMapMarker} className="blue" /> &nbsp;
            Bizerte, Bizerte nord
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="blue" /> &nbsp; +216
            25 447 885
          </p>

          <div className="d-none d-md-block">
            <p>
              <FontAwesomeIcon icon={faExchangeAlt} className="blue" /> &nbsp; a
              échangé 8 articles
            </p>
            <br />
            <FontAwesomeIcon icon={faEye} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">118</span> fois
            <br />
            <br />
            <FontAwesomeIcon icon={faHeart} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">12</span>{" "}
            personnes
            <br />
            <br />
            <FontAwesomeIcon icon={faSyncAlt} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">3</span> en cours
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ItemProfileInfoSection;
