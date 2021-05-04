import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Redirect } from "react-router";

function Messages() {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  if (userInfo === null) return <Redirect to="/" />;

  return (
    <>
      <div id="conversation-area">
        {[...Array(4)].map((x, i) => (
          <Row key={i}>
            <Col>
              <img
                src={require("../../../images/avatars/default_m.png")}
                alt=""
                className="discussion-avatar-left"
              />
              <p className="discussion discussion-left">
                Je ferai de mon mieux ama nabtach 3lik
              </p>
            </Col>
          </Row>
        ))}
        {[...Array(22)].map((x, i) => (
          <Row key={i}>
            <Col className="text-right">
              <img
                src={require("../../../images/avatars/default_m.png")}
                alt=""
                className="discussion-avatar-right"
              />
              <p className="discussion discussion-right">
                Je ferai de mon mieux ama nabtach 3lik
              </p>
            </Col>
          </Row>
        ))}
        <Row>
          <Col>
            <img
              src={require("../../../images/avatars/default_m.png")}
              alt=""
              className="discussion-avatar-left"
            />
            <p className="discussion discussion-left">
              Je ferai de mon mieux ama nabtach 3lik
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <img
              src={require("../../../images/avatars/default_m.png")}
              alt=""
              className="discussion-avatar-right"
            />
            <p className="discussion discussion-right">
              Je ferai de mon mieux ama nabtach 3lik
            </p>
          </Col>
        </Row>
      </div>
      <Form.Group className="conversation-input-text">
        <br />
        <Form.Control type="text" placeholder="répondre..." />
      </Form.Group>
    </>
  );
}

export default Messages;
