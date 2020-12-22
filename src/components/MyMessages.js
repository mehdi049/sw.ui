import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function MyMessages() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h3>Mes messages</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={3} sm={4}>
            <Row className="discussion-item">
              <Col xs={12} sm={5} md={4} lg={3} xl={2}>
                <img
                  src={require("../images/avatars/128_1.png")}
                  className="msg-img"
                  alt=""
                />
              </Col>
              <Col xs={12} sm={7} md={8} lg={9} xl={10}>
                <h6 className="dark-blue">Mehdi Marouani</h6>
                <p className="d-none d-md-block">
                  Je ferai de mon mieux ama nabtach 3lik
                </p>
              </Col>
            </Row>
            {[...Array(4)].map((x, i) => (
              <Row className="discussion-item not-read" key={i}>
                <Col xs={12} sm={5} md={4} lg={3} xl={2}>
                  <img
                    src={require("../images/avatars/128_1.png")}
                    className="msg-img"
                    alt=""
                  />
                </Col>
                <Col xs={12} sm={7} md={8} lg={9} xl={10}>
                  <h6 className="dark-blue">Mehdi Marouani</h6>
                  <p className="d-none d-md-block">
                    Je ferai de mon mieux ama nabtach 3lik Je ferai de mon mieux
                    ama nabtach [...]
                  </p>
                </Col>
              </Row>
            ))}
            <Row className="discussion-item">
              <Col lg={2}>
                <img
                  src={require("../images/avatars/128_1.png")}
                  height={50}
                  alt=""
                />
              </Col>
              <Col>
                <h6 className="dark-blue">Mehdi Marouani</h6>
                <p className="d-none d-md-block">
                  Je ferai de mon mieux ama nabtach 3lik
                </p>
              </Col>
            </Row>
          </Col>

          <Col xs={9} sm={8}>
            <div id="conversation-area">
              {[...Array(4)].map((x, i) => (
                <Row key={i}>
                  <Col>
                    <img
                      src={require("../images/avatars/128_1.png")}
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
                      src={require("../images/avatars/128_16.png")}
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
                    src={require("../images/avatars/128_1.png")}
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
                    src={require("../images/avatars/128_16.png")}
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
              <Form.Control type="text" placeholder="répondre..." />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyMessages;
