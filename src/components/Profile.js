import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import CityDropDown from "./_sharedComponents/CityDropDown";
import FileUpload from "./_sharedComponents/FileUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
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
          </Col>
          <Col lg="6">
            <h3>Mon compte</h3>
            <Form>
              <Form.Group>
                <Form.Label>
                  <img
                    src={require("../images/avatars/128_1.png")}
                    alt=""
                    width="50"
                  />
                </Form.Label>
                <br />
                <FileUpload />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Nom</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Prénom</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Email</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Num. Téléphone</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Sexe</Form.Label>
                <Form.Check
                  type="radio"
                  label="Homme"
                  checked={true}
                  name="sexe"
                />
                <Form.Check type="radio" label="Femme" name="sexe" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Date de naissance</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Adresse</Form.Label>
                <CityDropDown />
              </Form.Group>
              <Button variant="primary" type="submit">
                Valider
              </Button>
            </Form>
            <br />
          </Col>
          <Col lg="3">
            <h3>Mes préferences</h3>
            <Form>
              <Form.Group>
                <Form.Label className="dark-blue">
                  Afficher mon numéro de télephone
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Oui"
                  checked={true}
                  name="displayPhoneNum"
                />
                <Form.Check type="radio" label="Non" name="displayPhoneNum" />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">
                  Recevoir des notification sur les nouveaux articles
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Oui"
                  checked={true}
                  name="newItemNotification"
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  name="newItemNotification"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">
                  Recevoir des notifications par email
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Oui"
                  checked={true}
                  name="emailNotification"
                />
                <Form.Check type="radio" label="Non" name="emailNotification" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
