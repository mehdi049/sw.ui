import React from "react";
import { Accordion, Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCalendarMinus,
  faCalendarAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function MyNotifications() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h3>Notifications</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <FontAwesomeIcon icon={faCalendarDay} className="blue" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aujourdh'ui
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {[...Array(3)].map((x, i) => (
                      <React.Fragment key={i}>
                        <img
                          src={require("../images/avatars/128_1.png")}
                          height={30}
                          alt=""
                        />
                        &nbsp;&nbsp; <span className="dark-blue">Ahmed</span> a
                        aimé votre article &nbsp;&nbsp;{" "}
                        <span className="small">
                          <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
                        </span>
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                    {[...Array(3)].map((x, i) => (
                      <React.Fragment key={i}>
                        <img
                          src={require("../images/avatars/128_3.png")}
                          height={30}
                          alt=""
                        />
                        &nbsp;&nbsp; <span className="dark-blue">Sofien</span> a
                        a commenté votre publication &nbsp;&nbsp;{" "}
                        <span className="small">
                          <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
                        </span>
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <FontAwesomeIcon icon={faCalendarMinus} className="blue" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hier
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <img
                      src={require("../images/avatars/128_3.png")}
                      height={30}
                      alt=""
                    />
                    &nbsp;&nbsp; <span className="dark-blue">Sofien</span> a a
                    commenté votre publication &nbsp;&nbsp;{" "}
                    <span className="small">
                      <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
                    </span>
                    <br />
                    <br />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="blue" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Plus ancien
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <img
                      src={require("../images/avatars/128_3.png")}
                      height={30}
                      alt=""
                    />
                    &nbsp;&nbsp; <span className="dark-blue">Sofien</span> a a
                    commenté votre publication &nbsp;&nbsp;{" "}
                    <span className="small">
                      <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
                    </span>
                    <br />
                    <br />
                    <img
                      src={require("../images/avatars/128_3.png")}
                      height={30}
                      alt=""
                    />
                    &nbsp;&nbsp; <span className="dark-blue">Sofien</span> a a
                    commenté votre publication &nbsp;&nbsp;{" "}
                    <span className="small">
                      <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
                    </span>
                    <br />
                    <br />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyNotifications;
