import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function Messages() {
  return (
    <>
      <div id="conversation-area">
        {[...Array(4)].map((x, i) => (
          <Row key={i}>
            <Col>
              <img
                src={require("../../../images/avatars/128_1.png")}
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
                src={require("../../../images/avatars/128_16.png")}
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
              src={require("../../../images/avatars/128_1.png")}
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
              src={require("../../../images/avatars/128_16.png")}
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
