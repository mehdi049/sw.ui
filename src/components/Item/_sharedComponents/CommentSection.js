import React, { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function CommentSection(props) {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") !== null
  );

  function validateProfileImage(profile, className) {
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
          src={"/images/not-default_f.png"}
          alt={profile.firstName}
          className={className}
          roundedCircle
        />
      );
    }
  }

  return (
    <>
      <Row>
        <Col>
          {props.itemFeedbacks.length < 2 ? (
            <h3>{props.itemFeedbacks.length} commentaire</h3>
          ) : (
            <h3>{props.itemFeedbacks.length} commentaires</h3>
          )}
        </Col>
      </Row>
      {props.itemFeedbacks.map((x) => (
        <Row className="comment-section" key={x.id}>
          <Col xs={3} sm={2} xl={1}>
            {validateProfileImage(x.user, "profile-img")}
          </Col>
          <Col xs={9} sm={10} xl={11}>
            <span className="dark-gray">
              {x.user.firstName} {x.user.lastName}{" "}
            </span>{" "}
            |{" "}
            <span className="small">
              <FontAwesomeIcon icon={faClock} />{" "}
              {format(new Date(x.addedTime), "dd MMMM yyyy hh:mm", {
                locale: fr,
              })}
              {x.user.id === userInfo.id && (
                <>
                  &nbsp; | &nbsp;
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="pointer dark-blue"
                    onClick={() => props.onDelete(x.id)}
                  />
                </>
              )}
            </span>
            <p className="comment-text">{x.feedback}</p>
          </Col>
        </Row>
      ))}
      {isAuthenticated && (
        <Row className="comment-section">
          <Col xs={3} sm={2} xl={1}>
            {validateProfileImage(userInfo, "profile-img")}
          </Col>
          <Col xs={9} sm={10} xl={11}>
            <span className="dark-gray">
              {userInfo.firstName} {userInfo.lastName}{" "}
            </span>
            <Form.Control
              name="feedback"
              as="textarea"
              rows="4"
              value={props.feedback.feedback}
              onChange={props.onChange}
            />
            <br />
            <div className="text-right">
              <Button
                variant="primary"
                type="button"
                onClick={props.onSubmit}
                disabled={props.disableSubmitButton}
              >
                Ajouter
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default CommentSection;
