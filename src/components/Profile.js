import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import CityDropDown from "./_sharedComponents/CityDropDown";
import FileUpload from "./_sharedComponents/FileUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faSyncAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = useAuth0();
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={12} sm={4} md={3}>
            <h3>Mon profile</h3>
            <Row>
              <Col xs={3} sm={12} className="profile-info">
                <FontAwesomeIcon icon={faEye} className="blue" />
                &nbsp;&nbsp; <span className="bold big dark-blue">
                  118
                </span>{" "}
                <span className="d-none d-sm-block inline-block-md">fois</span>
              </Col>
              <Col xs={3} sm={12} className="profile-info">
                <FontAwesomeIcon icon={faHeart} className="blue" />
                &nbsp;&nbsp; <span className="bold big dark-blue">12</span>{" "}
                <span className="d-none d-sm-block inline-block-md">
                  personne(s)
                </span>
              </Col>
              <Col xs={3} sm={12} className="profile-info">
                <FontAwesomeIcon icon={faSyncAlt} className="blue" />
                &nbsp;&nbsp; <span className="bold big dark-blue">3</span>{" "}
                <span className="d-none d-sm-block inline-block-md">
                  en cours
                </span>
              </Col>
              <Col xs={3} sm={12} className="profile-info">
                <FontAwesomeIcon icon={faExchangeAlt} className="blue" />
                &nbsp;&nbsp; <span className="bold big dark-blue">2</span>{" "}
                <span className="d-none d-sm-block inline-block-md">
                  échange(s) aboutie
                </span>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={8} lg={6}>
            <br className="d-block d-sm-none" />
            <h3>Mon compte</h3>
            <Form>
              <Form.Group>
                <Form.Label>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="img-rounded"
                    width="50"
                  />
                </Form.Label>
                <br />
                <FileUpload />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Nom</Form.Label>
                <Form.Control type="text" value={user.family_name} />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Prénom</Form.Label>
                <Form.Control type="text" value={user.given_name} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Email</Form.Label>
                <Form.Control type="text" value={user.email} />
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
              <div className="text-right">
                <Button variant="primary" type="button">
                  Valider
                </Button>
              </div>
            </Form>
            <br />
          </Col>
          <Col lg={3} className="d-none d-lg-block">
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
