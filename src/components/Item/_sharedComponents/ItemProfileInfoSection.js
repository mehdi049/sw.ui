import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhoneAlt,
  faExchangeAlt,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function ItemProfileInfoSection(props) {
  const [profile, setProfile] = useState(props.profile);

  function validateProfileImage(profile, className) {
    if (profile)
      try {
        return (
          <Image
            src={require(process.env.REACT_APP_PROFILE_UPLOAD_PATH +
              profile.picture)}
            alt={profile.firstName}
            className={className}
            roundedCircle
          />
        );
      } catch (err) {
        return profile.gender === "m" ? (
          <Image
            src={"/images/default_m.png"}
            alt={profile.firstName}
            className={className}
            roundedCircle
          />
        ) : (
          <Image
            src={"/images/default_f.png"}
            alt={profile.firstName}
            className={className}
            roundedCircle
          />
        );
      }
  }

  return (
    <>
      {profile && (
        <Row>
          <Col xs={3} sm={2} md={12}>
            {validateProfileImage(profile, "profile-img")}
            <span className="dark-gray profile-info-text d-none d-md-inline">
              &nbsp; {profile.firstName} {profile.lastName}
            </span>
          </Col>
          <Col xs={9} sm={10} md={12}>
            <br className="d-none d-md-inline" />
            <p className="dark-gray profile-info-text d-block d-sm-inline d-md-none">
              {profile.firstName} {profile.lastName}
            </p>
            <p className="profile-info-text">
              <FontAwesomeIcon icon={faMapMarker} className="blue" /> &nbsp;
              {profile.city}, {profile.region}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="blue" /> &nbsp; +216
              {profile.phoneNumber}
            </p>

            <div className="d-none d-md-block">
              <p>
                <FontAwesomeIcon icon={faExchangeAlt} className="blue" /> &nbsp;
                a échangé {props.profile.exchangesDoneCount} article(s)
              </p>
              <br />
              {props.seen > 0 && (
                <>
                  <FontAwesomeIcon icon={faEye} className="blue" />
                  &nbsp;&nbsp;{" "}
                  <span className="bold big dark-blue">{props.seen}</span> fois
                  <br />
                  <br />
                </>
              )}
              {props.likes > 0 && (
                <>
                  <FontAwesomeIcon icon={faHeart} className="blue" />
                  &nbsp;&nbsp;{" "}
                  <span className="bold big dark-blue">{props.likes}</span>{" "}
                  personnes
                </>
              )}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ItemProfileInfoSection;
