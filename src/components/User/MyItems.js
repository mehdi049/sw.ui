import React, { useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Badge,
  Modal,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faInfoCircle,
  faClock,
  faComment,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MultipleImageUploadComponent from "../_sharedComponents/MultipleImageUpload";
import ItemCategories from "../_sharedComponents/ItemCategories";

function MyItems() {
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showUpdate, setShowUpdate] = useState(false);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h3>Mes articles</h3>
            <Table striped bordered responsive id="my-item-table">
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Demandes d'échange</th>
                  <th style={{ width: 100 }}></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((x, i) => (
                  <tr key={i}>
                    <td>
                      {[...Array(5)].map((x, j) => (
                        <div
                          key={j}
                          className="item-img-container-sm"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("../../images/uploads/item1-1.png") +
                              ")",
                          }}
                        ></div>
                      ))}
                      <br style={{ clear: "both" }} />
                      <br style={{ clear: "both" }} />
                      <Badge className="green2-bg">Eléctronique</Badge>
                      <span className="small">
                        &nbsp;&nbsp; <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | &nbsp;
                        <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <p>
                        <span className="bold blue">Samsung galaxi s20</span>
                        <span className="price-info blue">
                          <FontAwesomeIcon icon={faCoins} /> 350 TND
                          &nbsp;&nbsp;
                          <span className="d-block d-md-inline">
                            <FontAwesomeIcon icon={faExchangeAlt} />
                            &nbsp; Echange
                          </span>
                        </span>
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% [...]
                      </p>
                    </td>
                    <td>
                      {[...Array(2)].map((x, j) => (
                        <div key={j} className="dash-separation">
                          <Badge className="green2-bg">Eléctronique</Badge>
                          &nbsp;
                          <span className="small">
                            Par Ahmed | <FontAwesomeIcon icon={faClock} /> 22
                            Aout 2020
                          </span>
                          <Link to="/item" className="blue bold d-block">
                            Iphone 10
                          </Link>
                          <span className="price-info blue">
                            <FontAwesomeIcon icon={faCoins} /> 350 TND
                            &nbsp;&nbsp;
                            <span className="d-block d-md-inline">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              &nbsp; Echange
                            </span>
                          </span>
                        </div>
                      ))}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="blue pointer"
                        onClick={handleShowDelete}
                      />
                      &nbsp;|&nbsp;
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="blue pointer"
                        onClick={handleShowUpdate}
                      />
                      &nbsp;|&nbsp;
                      <Link to="/item">
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="blue pointer"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* delete popup */}
            <Modal show={showDelete} onHide={handleCloseDelete}>
              <Modal.Header closeButton>
                <Modal.Title>Retirer votre article</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Est ce que vous êtes sure que vous voulez supprimer votre
                article <b>Samsung galaxi s20</b>?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleCloseDelete}>
                  Annuler
                </Button>
                <Button variant="primary" onClick={handleCloseDelete}>
                  Supprimer
                </Button>
              </Modal.Footer>
            </Modal>

            {/* update popup */}
            <Modal show={showUpdate} onHide={handleCloseUpdate} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Modifier votre article</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                      <option>Occasion</option>
                      <option>Neuf</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="dark-blue">Image</Form.Label>&nbsp;
                    <span className="small">(Maximum 5 photos)</span>
                    <br />
                    <MultipleImageUploadComponent />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="dark-blue">Prix</Form.Label>
                    <InputGroup className="mb-2 mr-sm-2">
                      <Form.Control type="text" />
                      <InputGroup.Append className="white">
                        <InputGroup.Text>Dt</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="dark-blue">Echange avec</Form.Label>
                    <ItemCategories all={true} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      className="mb-2 mr-sm-2"
                      label="Je ne suis pas ouvert à l'échange"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleCloseUpdate}>
                  Annuler
                </Button>
                <Button variant="primary" onClick={handleCloseUpdate}>
                  Modifier
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyItems;
