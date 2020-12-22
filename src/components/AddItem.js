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
  faClock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AddItem() {
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
            <h3>Articles ajoutés</h3>
            {[...Array(4)].map((x, i) => (
              <Link key={i} to="/" className="dash-separation added-item-link">
                <Row>
                  <Col lg={3}>
                    <div className="item-img-container-sm">
                      <span class="helper"></span>
                      <img
                        src={require("../images/uploads/item1-1.png")}
                        className="item-img"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col>
                    <p className="bold blue">Samsung galaxi s20</p>
                    <span className="small gray">
                      <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |
                      &nbsp;&nbsp;
                      <FontAwesomeIcon icon={faComment} /> 15
                    </span>
                  </Col>
                </Row>
              </Link>
            ))}
            <br />
            <Link to="/my-items" className="blue">
              Afficher tous
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddItem;
