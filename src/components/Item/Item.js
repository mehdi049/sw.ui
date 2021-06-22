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
import ImageGallery from "react-image-gallery";
import { toast } from "react-toastify";

function Item(props) {
  const [isError, setIsError] = useState(false);

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

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
  const [likedItem, setLikedItem] = useState(false);
  const [images, setImages] = useState([]);
  const [similarItems, setSimilarItems] = useState([]);

  const [feedback, setFeedback] = useState({
    feedback: "",
    itemId: props.match.params.id,
    userId: localStorage.getItem("user") !== null ? userInfo.id : "",
  });

  useEffect(() => {
    loadItem();
  }, []);

  function loadItem() {
    api
      .getItemById(props.match.params.id)
      .then((res) => {
        setIsError(false);
        setItem(res.body);
        if (userInfo !== null) {
          if (res.body.item.likes !== null && res.body.item.likes.length > 0)
            if (
              res.body.item.likes.filter((x) => x.userId === userInfo.id)
                .length > 0
            )
              setLikedItem(true);
        }
        const _images = [];
        res.body.item.images
          .split(";")
          .filter((x) => x !== "")
          .map((x) => {
            try {
              _images.push({
                original: require(process.env.REACT_APP_ITEM_UPLOAD_PATH + x),
                thumbnail: require(process.env.REACT_APP_ITEM_UPLOAD_PATH + x),
              });
            } catch (err) {
              _images.push({
                original: require("../../images/not-available.jpg"),
                thumbnail: require("../../images/not-available.jpg"),
              });
            }
          });
        setImages(_images);

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
  }

  function handleAddFeedbackChange(event) {
    const _feedback = {
      ...feedback,
      [event.target.name]: event.target.value,
    };
    setFeedback(_feedback);
  }

  function handleAddFeeback() {
    if (feedback.feedback !== "" && feedback.userId !== "") {
      setDisableSubmitButton(true);
      api
        .addFeedback(feedback)
        .then((res) => {
          if (res.status === 200) {
            setFeedback({
              feedback: "",
              itemId: props.match.params.id,
              userId: localStorage.getItem("user") !== null ? userInfo.id : "",
            });
            loadItem();
            toast.success("Commentaire ajouté avec succès.");
          } else toast.error(res.message);
          setDisableSubmitButton(false);
        })
        .catch((e) => {
          setDisableSubmitButton(false);
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        });
    }
  }

  function handleDeleteFeeback(feedbackId) {
    if (feedbackId !== "") {
      api
        .deleteFeedback(feedbackId)
        .then((res) => {
          if (res.status === 200) {
            loadItem();
            toast.success("Commentaire supprimé avec succès.");
          } else toast.error(res.message);
        })
        .catch((e) => {
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        });
    }
  }

  function handleLikeItem() {
    const like = {
      itemId: props.match.params.id,
      userId: userInfo.id,
    };
    api
      .addRemoveLike(like)
      .then((res) => {
        if (res.status === 200) setLikedItem(!likedItem);
        else toast.error(res.message);
      })
      .catch((e) => {
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      });
  }

  function onSubmitSelectedItems(selectedItems) {
    if (selectedItems.length === 0)
      toast.error("Veuillez selectionner au moin un article.");
    else {
      api
        .addItemExchangeRequest(props.match.params.id, selectedItems)
        .then((res) => {
          if (res.status === 200) {
            toast.success("La demande d'échange a été envoyé avec succès.");
            handleCloseExchangeModal();
          } else toast.error(res.message);
        })
        .catch((e) => {
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        });
    }
  }

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
                  <br />
                  {item.item.exchangeWithCategory !== null && (
                    <>
                      <span className="small">Ouvert à l'echange avec</span>
                      &nbsp;
                      <Badge
                        className={"bg-" + item.item.exchangeWithCategoryId}
                      >
                        {item.item.exchangeWithCategory.name}
                        {item.item.exchangeWithSubCategory != null && (
                          <>
                            &nbsp;/&nbsp;
                            {item.item.exchangeWithSubCategory.name}
                          </>
                        )}
                      </Badge>
                    </>
                  )}
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
                        className={
                          likedItem
                            ? "pointer icon-large light-blue"
                            : "pointer icon-large"
                        }
                        id="item-like-icon"
                        onClick={handleLikeItem}
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
                {item.item.exchange && isAuthenticated && (
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
                      <p>Veuillez selectionner un ou plusieurs articles.</p>
                      <MyItemsForExchange
                        userId={userInfo.id}
                        onCloseModal={handleCloseExchangeModal}
                        onSubmitSelectedItems={onSubmitSelectedItems}
                      />
                    </Modal.Body>
                  </Modal>
                )}
              </Row>
              <br />
              <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              <br />
              <Row>
                <Col>
                  <p style={{ wordBreak: "break-word" }}>
                    {item.item.description}
                    <br />
                  </p>
                </Col>
              </Row>
              {item.item.exchange && (
                <AskedExchangesSection
                  itemsForExchange={item.item.itemExchanges}
                />
              )}
              <hr />
              <br />
              <CommentSection
                feedback={feedback}
                disableSubmitButton={disableSubmitButton}
                onChange={handleAddFeedbackChange}
                onSubmit={handleAddFeeback}
                onDelete={handleDeleteFeeback}
                itemFeedbacks={item.item.itemFeedbacks}
              />
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
