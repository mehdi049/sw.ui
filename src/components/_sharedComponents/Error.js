import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";

function Error() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="danger">
              Une erreur est survenu, veuillez reessayer plus tard.
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Error;
