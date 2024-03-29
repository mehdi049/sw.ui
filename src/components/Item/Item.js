import React, { useState } from "react";
import {
  Badge,
  Container,
  Row,
  Col,
  Button,
  Modal,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faClock,
  faExchangeAlt,
  faHeart,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import HeaderCategories from "../_sharedComponents/HeaderCategories";
import AskedExchangesSection from "./_sharedComponents/AskedExchangesSection";
import CommentSection from "./_sharedComponents/CommentSection";
import SimilarItemsSection from "./_sharedComponents/SimilarItemsSection";
import ItemProfileInfoSection from "./_sharedComponents/ItemProfileInfoSection";
import MyItemsForExchange from "./_sharedComponents/MyItemsForExchange";

function Item() {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") !== null
  );

  const [showExchangeModal, setShowExchangeModal] = useState(false);

  const handleCloseExchangeModal = () => setShowExchangeModal(false);
  const handleShowExchangeModal = () => setShowExchangeModal(true);

  return (
    <>
      <HeaderCategories />
      <br />
      <Container>
        <Row>
          <Col>
            <span className="blue">Eléctronique</span> >{" "}
            <span className="blue">Portable</span> > Samsung galaxi s20
            <br />
          </Col>
        </Row>
        <Row className="d-block d-md-none">
          <Col>
            <br />
            <ItemProfileInfoSection />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={9}>
            <Row>
              <Col xs={9} md={8} lg={7}>
                <h4>Samsung galaxi s20</h4>
                <Badge className="green2-bg">Electronique</Badge>{" "}
                <span className="small">
                  Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
                  <FontAwesomeIcon icon={faComment} /> 15
                </span>
                <span className="price-info blue big">
                  <FontAwesomeIcon icon={faCoins} /> 350 TND
                </span>
              </Col>

              <Col xs={3} md={4} lg={5} className="text-right">
                <br />
                {isAuthenticated ? (
                  <>
                    <Button
                      variant="outline-secondary"
                      type="button"
                      id="ask-exchange-btn"
                      className="d-none d-lg-inline"
                      onClick={handleShowExchangeModal}
                    >
                      Demander un échange
                    </Button>

                    <FontAwesomeIcon
                      icon={faExchangeAlt}
                      onClick={handleShowExchangeModal}
                      className="pointer icon-large d-inline d-lg-none blue"
                    />

                    <FontAwesomeIcon
                      icon={faHeart}
                      className="pointer icon-large"
                      id="item-like-icon"
                    />
                  </>
                ) : (
                  <>
                    <OverlayTrigger
                      trigger="click"
                      key="top"
                      placement="top"
                      overlay={
                        <Popover>
                          <Popover.Title as="h3">
                            Veuillez vous connecter
                          </Popover.Title>
                        </Popover>
                      }
                    >
                      <Button
                        variant="outline-secondary"
                        type="button"
                        id="ask-exchange-btn"
                        className="d-none d-lg-inline"
                      >
                        Demander un échange
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      key="top"
                      placement="top"
                      overlay={
                        <Popover>
                          <Popover.Title as="h3">
                            Veuillez vous connecter
                          </Popover.Title>
                        </Popover>
                      }
                    >
                      <FontAwesomeIcon
                        icon={faExchangeAlt}
                        className="pointer icon-large d-inline d-lg-none blue"
                      />
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      key="top"
                      placement="top"
                      overlay={
                        <Popover>
                          <Popover.Title as="h3">
                            Veuillez vous connecter
                          </Popover.Title>
                        </Popover>
                      }
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="pointer icon-large"
                        id="item-like-icon"
                      />
                    </OverlayTrigger>
                  </>
                )}
              </Col>

              <Modal show={showExchangeModal} onHide={handleCloseExchangeModal}>
                <Modal.Header closeButton>
                  <Modal.Title className="dark-blue">Echanger avec</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Veuillez selectionner un article.</p>
                  <MyItemsForExchange />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="light" onClick={handleCloseExchangeModal}>
                    Annuler
                  </Button>
                  <Button variant="primary" onClick={handleCloseExchangeModal}>
                    Demander un échange
                  </Button>
                </Modal.Footer>
              </Modal>
            </Row>
            <br />
            <Row>
              <Col sm={12} md={6}>
                <div
                  className="item-detail-img-container-lg"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../../images/uploads/item1-5.png") +
                      ")",
                  }}
                ></div>
              </Col>
              <Col sm={12} md={6}>
                <Row>
                  <Col xs={6}>
                    <div
                      className="item-detail-img-container-sm margin-bottom-10"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../images/uploads/item1-6.png") +
                          ")",
                      }}
                    ></div>
                  </Col>
                  <Col xs={6}>
                    <div
                      className="item-detail-img-container-sm margin-bottom-10"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../images/uploads/item1-5.png") +
                          ")",
                      }}
                    ></div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <div
                      className="item-detail-img-container-sm"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../images/uploads/item1-3.png") +
                          ")",
                      }}
                    ></div>
                  </Col>
                  <Col xs={6}>
                    <div
                      className="item-detail-img-container-sm"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../images/uploads/item1-4.png") +
                          ")",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <p>
                  Power of 5G: Get next-level power for everything you love to
                  do with Samsung Galaxy 5G; Share more, game harder, experience
                  more and never miss a beat <br />
                </p>
              </Col>
            </Row>
            <AskedExchangesSection />
            <hr />
            <br />
            <CommentSection />
          </Col>
          <Col xs={12} md={4} lg={3} className="d-none d-md-block">
            <ItemProfileInfoSection />
            <br />
            <br />
            <br />
            <SimilarItemsSection />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Item;
