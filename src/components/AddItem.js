import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ItemCategories from "./_sharedComponents/ItemCategories";
import MultipleImageUploadComponent from "./_sharedComponents/MultipleImageUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faSyncAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

function AddItem() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col lg="3">
            <h3>Mon profile</h3>
            <FontAwesomeIcon icon={faEye} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">118</span> fois
            <br />
            <br />
            <FontAwesomeIcon icon={faHeart} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">12</span>{" "}
            personnes
            <br />
            <br />
            <FontAwesomeIcon icon={faSyncAlt} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">3</span> en cours
            <br />
            <br />
            <FontAwesomeIcon icon={faExchangeAlt} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">2</span> echange
            aboutie
          </Col>
          <Col lg="6">
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
              <Button variant="primary" type="submit">
                Ajouter
              </Button>
            </Form>
            <br />
          </Col>
          <Col lg="3">
            <h3>Articles ajoutés</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddItem;
