import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Messages from "./_sharedComponents/Messages";

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
        <Row className="d-block d-sm-none">
          <Col>
            <Form.Control type="text" placeholder="Recherche" />
            <br />
          </Col>
        </Row>
        <Row>
          <Col xs={3} sm={4}>
            <Form.Control
              type="text"
              placeholder="Recherche"
              className="d-none d-sm-block"
            />

            <div id="discussion-item-list">
              <Row className="discussion-item">
                <Col xs={12} sm={5} md={4} lg={3} xl={2}>
                  <img
                    src={require("../../images/avatars/128_2.png")}
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
                      src={require("../../images/avatars/default_m.png")}
                      className="msg-img"
                      alt=""
                    />
                  </Col>
                  <Col xs={12} sm={7} md={8} lg={9} xl={10}>
                    <h6 className="dark-blue">Mehdi Marouani</h6>
                    <p className="d-none d-md-block">
                      Je ferai de mon mieux ama nabtach 3lik Je ferai de mon
                      mieux ama nabtach [...]
                    </p>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>

          <Col xs={9} sm={8}>
            <Messages />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyMessages;
