import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderCategories from "./_sharedComponents/HeaderCategories";
function Contact() {
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
              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
