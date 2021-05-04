import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
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
import * as api from "./api/CategoryApi";
import Error from "../_sharedComponents/Error";
import ItemMainImages from "./_sharedComponents/ItemMainImages";

function Item(props) {
  const [isError, setIsError] = useState(false);

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") !== null
  );

  const [showExchangeModal, setShowExchangeModal] = useState(false);

  const handleCloseExchangeModal = () => setShowExchangeModal(false);
  const handleShowExchangeModal = () => setShowExchangeModal(true);

  const [contentLoaded, setContentLoaded] = useState(false);

  const [item, setItem] = useState();
  const [similarItems, setSimilarItems] = useState([]);

  useEffect(() => {
    api
      .getItemById(props.match.params.id)
      .then((res) => {
        setIsError(false);
        setItem(res.body);
        api
          .getItemsByCategory(res.body.item.subCategory.category.id)
          .then((similarItemsResult) => {
            setSimilarItems(similarItemsResult.body);
            setContentLoaded(true);
          });
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  return (
    <>
      <HeaderCategories />
      <br />
      {item !== null && contentLoaded && (
        <Container>
          <Row>
            <Col>
              <span className="blue">
                {item.item.subCategory.category.name}
              </span>{" "}
              {"> "}
              <span className="blue">{item.item.subCategory.name}</span> {">"}{" "}
              {item.item.title}
              <br />
            </Col>
          </Row>
          <Row className="d-block d-md-none">
            <Col>
              <br />
              <ItemProfileInfoSection profile={item.user} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={9} md={8} lg={7}>
                  <h4>{item.item.title}</h4>
                  <Badge className={"bg-" + item.item.subCategory.category.id}>
                    {item.item.subCategory.category.name}
                  </Badge>{" "}
                  <span className="small">
                    Par {item.user.firstName} |{" "}
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {format(new Date(item.item.addedTime), "dd MMMM yyyy", {
                      locale: fr,
                    })}{" "}
                    | <FontAwesomeIcon icon={faComment} />{" "}
                    {item.item.itemFeedbacks.length}
                  </span>
                  <span className="price-info blue big">
                    {item.item.price && item.item.price !== 0 && (
                      <>
                        <FontAwesomeIcon icon={faCoins} /> {item.item.price} TND
                      </>
                    )}
                  </span>
                </Col>

                <Col xs={3} md={4} lg={5} className="text-right">
                  <br />
                  {isAuthenticated ? (
                    <>
                      {item.item.exchange && (
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
                        </>
                      )}
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="pointer icon-large"
                        id="item-like-icon"
                      />
                    </>
                  ) : (
                    <>
                      {item.item.exchange && (
                        <>
                          <OverlayTrigger
                            trigger="click"
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
                        </>
                      )}
                      <OverlayTrigger
                        trigger="click"
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
                {item.item.exchange && (
                  <Modal
                    show={showExchangeModal}
                    onHide={handleCloseExchangeModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="dark-blue">
                        Echanger avec
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Veuillez selectionner un article.</p>
                      <MyItemsForExchange />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="light"
                        onClick={handleCloseExchangeModal}
                      >
                        Annuler
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleCloseExchangeModal}
                      >
                        Demander un échange
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </Row>
              <br />
              <ItemMainImages images={item.item.images.split(";")} />
              <br />
              <Row>
                <Col>
                  <p style={{ wordBreak: "break-word" }}>
                    {item.item.description}
                    <br />
                  </p>
                </Col>
              </Row>
              <AskedExchangesSection />
              <hr />
              <br />
              <CommentSection itemFeedbacks={item.item.itemFeedbacks} />
            </Col>
            <Col xs={12} md={4} lg={3} className="d-none d-md-block">
              <ItemProfileInfoSection
                profile={item.user}
                seen={item.item.seen}
                likes={item.item.likes.length}
              />
              {item.item.seen > 0 && item.item.likes.length > 0 && (
                <>
                  <br />
                  <br />
                  <br />
                </>
              )}
              <SimilarItemsSection similarItems={similarItems} />
            </Col>
          </Row>
        </Container>
      )}
      {isError && <Error />}
    </>
  );
}

export default Item;
