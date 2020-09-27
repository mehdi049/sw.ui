import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import FileUpload from "./_sharedComponents/FileUpload";
import ItemCategories from "./_sharedComponents/ItemCategories";
import MultipleImageUploadComponent from "./_sharedComponents/MultipleImageUpload";

function AddItem() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col lg="6">
            <h3>Ajouter une annonce</h3>
            <Form>
              <Form.Group>
                <Form.Label className="dark-blue">Titre</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Description</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Catégorie</Form.Label>
                <ItemCategories />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Condition</Form.Label>
                <Form.Control as="select" className="select">
                  <option>Usé</option>
                  <option>Neuf</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Image</Form.Label>&nbsp;
                <span className="gray small">(Maximum 5 photos)</span>
                <br />
                <MultipleImageUploadComponent />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Echange avec</Form.Label>
                <ItemCategories all={true} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Ajouter
              </Button>
            </Form>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddItem;
