import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderCategories from "./_sharedComponents/HeaderCategories";
import ToastMessage from "./_sharedComponents/ToastMessage";
function Contact() {
  const [toastMessage, setToastMessage] = useState();
  const [displayToast, setDisplayToast] = useState(false);
  const [toastType, setToastType] = useState();

  /** toast function */
  function toastHandler(message, type) {
    setDisplayToast(true);
    setToastMessage(message);
    setToastType(type);
  }

  function contactHandler() {
    toastHandler("Message envoyé avec succé", "success");
  }

  return (
    <>
      <HeaderCategories />
      <br />
      <Container>
        <Row>
          <Col>
            <h3>Contacter nous</h3>
            <Form>
              <Form.Group>
                <Form.Label className="dark-blue">Email</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Sujet</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Adresse</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={contactHandler}>
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>

        <ToastMessage
          show={displayToast}
          toastHandler={toastHandler}
          onClose={() => setDisplayToast(false)}
          message={toastMessage}
          type={toastType}
        />
      </Container>
    </>
  );
}

export default Contact;
