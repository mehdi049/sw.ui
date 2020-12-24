import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ItemCategories from "../_sharedComponents/ItemCategories";
import MultipleImageUploadComponent from "../_sharedComponents/MultipleImageUpload";
import ProfileInfo from "./_sharedComponents/ProfileInfo";
import AddedItems from "./_sharedComponents/AddedItems";

function AddItem() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={12} sm={4} md={3}>
            <ProfileInfo />
          </Col>
          <Col xs={12} sm={8} lg={6}>
            <br className="d-block d-sm-none" />
            <h3>Créer une annonce</h3>
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
              <div className="text-right">
                <Button variant="primary" type="button">
                  Ajouter
                </Button>
              </div>
            </Form>
            <br />
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <AddedItems />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddItem;
